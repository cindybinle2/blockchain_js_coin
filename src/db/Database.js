import levelup from "levelup";
import leveldown from "leveldown";
import fs from "fs";
import DbConfig from "./../config/DbConfig";
export default class Database {
  constructor() {
    if(!fs.existsSync(DbConfig.storagePath)){
      fs.mkdirSync(DbConfig.storagePath);
    }
    if(!fs.existsSync(DbConfig.blockStoragePath)){
      fs.mkdirSync(DbConfig.blockStoragePath);
    }
    this.db_blockchain = levelup(leveldown(DbConfig.blockStoragePath));
  }
}

