import Database from './../Database';
export default class BlockRepository extends Database{
  save(key, data){
    return this.db_blockchain.put("b" + key, data)
  }

  findOne(key){
    return this.db_blockchain.get("b" + key);
  }

  saveLastestBlock(hash){
    return this.db_blockchain.put('lastest_block', hash);
  }

  getLastestBlock(){
    return this.db_blockchain.get('lastest_block');
  }
}