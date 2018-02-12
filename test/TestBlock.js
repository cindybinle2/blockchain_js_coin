import Blockchain from './../src/crypto/Blockchain';
import Block from './../src/crypto/Block';
let blockChain= new Blockchain();
blockChain.addBlock(new Block(1, "8/2/2018", {amount: 4}));

console.log("blockchain is valid " + blockChain.isChainValid());