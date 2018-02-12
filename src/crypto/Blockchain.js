import Block from "./Block";
import MineConfig from "./../config/MineConfig";
import BlockRepository from "./../db/repository/BlockRepository";
export default class Blockchain{
  constructor(){
    this.chain= [this.createGenesisBlock()];
  }

  createGenesisBlock(){
    const genesisBlock= new Block(0, "01/01/2018", "Genesis block", "0");
    let blockRepository= new BlockRepository();
    blockRepository.save(genesisBlock.hash, JSON.stringify(genesisBlock));
    return genesisBlock;
  }

  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousHash= this.getLatestBlock().hash;
    newBlock.mineBlock(MineConfig.difficultyLevel);
    this.chain.push(newBlock);
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