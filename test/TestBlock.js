import Blockchain from './../src/crypto/Blockchain';
import Block from './../src/crypto/Block';
let blockChain= new Blockchain();

setTimeout(()=>{
  blockChain.addBlock(new Block(1, "8/2/2018", {amount: 4}));
}, 3000);
