## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. The addresses and their initial balance are hard coded in [index.js](./server/index.js) file. These addresses corresponds to valid address
generated using Metamask wallet.
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

## Usage workflow

The client sends request to transfer balance to the server. This post request contains recepient address, amount, a message, and the signature of the message which is signed using the wallet of the client. An extra module is also added to facilitate client for signing message.
The server verifies this signature and on verification, it transfers the amount. 

### This code is just for demonstrating usage of Public key cryptography in real world applications. Please ignore the UI/UX and a few coding flaws which might exists.
