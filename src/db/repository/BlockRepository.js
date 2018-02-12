import Database from './../Database';
export default class BlockRepository extends Database{
  save(key, data){
    this.db_blockchain.put("b" + key, data)
      .then(()=>{
       console.log(this.db_blockchain.get("b" + key));
        return this.db_blockchain.get("b" + key);
      })
  }
}