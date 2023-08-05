import { useState } from "react";
import server from "./server";

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [signature, setSignature] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();
    
    try {
      const {data} = await server.post(`send`, {
        sender,
        amount: parseInt(sendAmount),
        recipient,
        message,
        signature
        
      });
      alert(data.text)
      setBalance(data.balance);
    } catch (ex) {
      alert(ex);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Sender address
        <input
          placeholder="Your wallet address..."
          value={sender}
          onChange={setValue(setSender)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Receipient address"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <label>
        Message signed
        <input
          placeholder="Enter the message you signed (case sensitive)..."
          value={message}
          onChange={setValue(setMessage)}
        ></input>
      </label>

      <label>
        Signed Hash
        <input
          placeholder="Please enter the signed hash value..."
          value={signature}
          onChange={setValue(setSignature)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer"  />
    </form>
  );
}

export default Transfer;
