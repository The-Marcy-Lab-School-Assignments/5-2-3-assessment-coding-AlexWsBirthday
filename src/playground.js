// const ToDoItem = require('./ToDoItem');
// const ToDoList = require('./ToDoList');

// const {
//   bankAccountFactory,
//   Phone,
//   AppleIPhone,
// } = require('./from-scratch');
const bankAccountFactory = (amount = 0) => {

  return {
    checkBalance: function () {
      return amount
    },

    add: function (addMoney) {
      amount += addMoney
      console.log(amount += addMoney)
      console.log(`$${addMoney} added.`)

    },

    subtract: function (subMoney) {
      amount -= subMoney
      return console.log(`$${subMoney} subtracted.`)

    }

  }



};

let myBankAcc = bankAccountFactory(300);
console.log(myBankAcc.checkBalance())
console.log(myBankAcc.add(250))
console.log(myBankAcc.checkBalance())
console.log(myBankAcc.subtract(50))
console.log(myBankAcc.checkBalance())


