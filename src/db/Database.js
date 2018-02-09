import levelup from "levelup";
import leveldown from "leveldown";
import DbConfig from "./../config/DbConfig";
export default class Database {
  constructor() {
    this.db = levelup(leveldown(DbConfig.storagePath));
  }
}

