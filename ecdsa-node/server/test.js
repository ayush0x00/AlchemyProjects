const {secp256k1} = require("ethereum-cryptography/secp256k1");
const {keccak256} = require("ethereum-cryptography/keccak")
const {utf8ToBytes} = require("ethereum-cryptography/utils")
const {ethers} = require("ethers")


const addr = "0x92E4A27BedAec76C48E6cbDBB29939e4C5F70d3e"
const messageHash = keccak256(utf8ToBytes("hello"));
const signature = "0x39850e7b6359e2a1d2c87ee9c6ac136ffb9d5ab9e81d45d3e5cdcd1c15b93ac1074bca8f816044e9969e48e688a52926e9f127b2150931096c3844cd1e89e6d41c"

// const verify = secp256k1.verify(signature,messageHash,pubKey);

const verify = async (signature, message, addr)=>{
    const signer = await ethers.utils.verifyMessage(message,signature);
    return signer
}
