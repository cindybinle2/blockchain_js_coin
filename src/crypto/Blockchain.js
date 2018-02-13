import Block from "./Block";
import MineConfig from "./../config/MineConfig";
import BlockRepository from "./../db/repository/BlockRepository";
export default class Blockchain{
  constructor(){
    this.createGenesisBlock();
  }

  createGenesisBlock(){
    const genesisBlock= new Block(0, "01/01/2018", "Genesis block", "0");
    this.createBlock(genesisBlock)
      .then((data)=>{
        console.log("Created genesis block with hash: " + JSON.parse(data).hash);
      });
  }

  createBlock(block){
    let blockRepository= new BlockRepository();
    return blockRepository.save(block.hash, JSON.stringify(block))
      .then(()=>{
        return blockRepository.saveLastestBlock(JSON.stringify(block));
      })
      .then(()=>{
        return blockRepository.findOne(block.hash);
      });
  }

  addBlock(newBlock){
    let blockRepository= new BlockRepository();
    blockRepository.getLastestBlock()
      .then((data)=>{
        console.log(data);
        newBlock.previousHash= JSON.parse(data).hash;
        newBlock.mineBlock(MineConfig.difficultyLevel);
        console.log(data);
        this.createBlock(newBlock)
          .then((data)=>{
            console.log("added block ");
            console.log(JSON.parse(data));
          });
      });
  }

  isChainValid(){
    // for (let i= 1; i< this.chain.length ; i++){
    //   const currentBlock= this.chain[i];
    //   const previousBlock= this.chain[i - 1];
    //   if(currentBlock.hash !== currentBlock.calculateHash()){
    //     return false;
    //   }
    //   if(currentBlock.previousHash !== previousBlock.hash){
    //     return false;
    //   }
    // }
    return true;
  }

}