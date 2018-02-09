export default class Transaction {
  constructor(id ,fromAddress, toAddress, amount) {
    this.id= id;
    this.fromAddress= fromAddress;
    this.toAddress= toAddress;
    this.amount= amount;
  }
}

