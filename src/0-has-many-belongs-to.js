const { getId } = require('./utils');

class ToDoItem {
  static #allToDoItems = [];
  constructor(description, priorityLevel, effortRequired) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.difficulty = effortRequired;
    ToDoItem.#allToDoItems.push(this)
  }

  youCompleted(itemName) {
    const choreDone = ToDoItem.#allToDoItems.find((item) => item.name === itemName)
    choreDone.isDone = true;
    return `${itemName} has been completed!`
  }
}


class ToDoList {
  static #allLists = [];
  #listItems = [];

  constructor(listName, dateCreated) {
    this.id = getId();
    this.name = listName;
    ToDoList.#allLists.push(this)
    this.date = dateCreated
  }

  static list() {
    return [...ToDoList.#allLists]
  }
  static findBy(id) {
    return ToDoList.#allLists.find((list) => list.id === id)
  }

  createItem(desc, priority) {
    const newItem = new ToDoItem(desc, priority)
    this.#listItems.push(newItem)
    return newItem
  }

  getItems() {
    return [...this.#listItems]
  }

  getCompletedCount() {
    //setting a counting variable and giving it a start val of 0
    let count = 0;
    //checking each list item and seeing if the isDone property is true.
    this.#listItems.forEach((item) => {
      //if so, increment the count variable's value.
      if (item.isDone === true) count++
    })

    return count
  }

  getIncompleteCount() {
    //setting a counting variable and giving it a start val of 0
    let count = 0;
    //checking each list item and seeing if the isDone property is true.
    this.#listItems.forEach((item) => {
      //if so, increment the count variable's value.
      if (item.isDone === false) count++
    })

    return count
  }


}

// const chores = new ToDoList('Chores');
// chores.createItem('laundry', 1);
// const cleanCar = chores.createItem('wash car', 2);
// const vacuum = chores.createItem('vacuum', 3);

// console.log(chores.getCompletedCount())


// vacuum.isDone = true;
// cleanCar.isDone = true;

// console.log(chores.getCompletedCount())

module.exports = {
  ToDoItem,
  ToDoList
};