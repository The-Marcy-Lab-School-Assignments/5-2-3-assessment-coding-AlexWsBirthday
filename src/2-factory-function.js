const bankAccountFactory = (amount = 0) => {

  return {
    checkBalance: function () {
      return amount
    },

    add: function (addMoney) {
      amount += addMoney
      console.log(`$${addMoney} added.`)

    },

    subtract: function (subMoney) {
      amount -= subMoney
      console.log(`$${subMoney} subtracted.`)

    }

  }



};

module.exports = {
  bankAccountFactory,
};
