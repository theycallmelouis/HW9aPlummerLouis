class Account {
    constructor(owner) {
      this.owner = owner;
      this.balance = 0;
    }
  
    credit(amount) {
      this.balance += amount;
    }
  
    describe() {
      console.log(`Account owner: ${this.owner}`);
      console.log(`Account balance: ${this.balance}`);
    }
  }
  
  module.exports = Account;