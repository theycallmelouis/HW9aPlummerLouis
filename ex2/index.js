const Account = require('./accounting.js');

const myAccount = new Account('Louis');

myAccount.credit(1000);
myAccount.credit(500);
myAccount.describe();