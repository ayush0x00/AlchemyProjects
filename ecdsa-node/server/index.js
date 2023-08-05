const express = require("express");
const app = express();
const cors = require("cors");
const {ethers} = require("ethers")
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "0x92E4A27BedAec76C48E6cbDBB29939e4C5F70d3e": 100,
  "0x80FBF2609E225c3a46642c00a27C9a2Ee5654a51": 50,
  "0x9b8082a15F748bA33c7F1407F7AA2865b0FD4cC5": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  console.log(req.body)
  const { sender, recipient, amount, message, signature } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ text: "Not enough funds!" });
  } else {
    const verify = async (signature, message, sender) => {
      const signer = await ethers.utils.verifyMessage(message, signature);
      if (signer === sender) {
        balances[sender] -= amount;
        balances[recipient] += amount;
        res.send({ text: "Transfer done", balance:balances[sender] });
      } else res.send({ text: "Invalid signature" });
    };
    verify(signature, message, sender);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
