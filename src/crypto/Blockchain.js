import Block from './Block';
export default class Blockchain{
  constructor(){
    this.chain= [this.createGenesisBlock()];
    this.difficultyMine= 0;
  }

  createGenesisBlock(){
    return new Block(0, "01/01/2018", "Genesis block", "0");
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousHash= this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficultyMine);
    this.chain.push(newBlock)
  }

  isChainValid(){
    for (let i= 1; i< this.chain.length ; i++){
      const currentBlock= this.chain[i];
      const previousBlock= this.chain[i - 1];
      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }
      if(currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
    }
    return true;
  }

}