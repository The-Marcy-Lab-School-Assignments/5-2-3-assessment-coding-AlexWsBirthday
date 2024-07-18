class Phone {

  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = []
  }

  makeCall(contactOrNum) {

    //guard clauses if the argument for makeCall is not a contact and the number is not 10 digits long
    if (this.contacts.find((contact) => contact.name === contactOrNum) === undefined && contactOrNum.length !== 10) {
      return `Invalid`
    } else if (this.contacts.find((contact) => contact.name === contactOrNum) || this.contacts.find((contact) => contact.phoneNumber === contactOrNum)) {
      //since Zo's test case passes in Zo's number, we 
      const contactFinder = this.contacts.find((contact) => contact.name === contactOrNum || contact.phoneNumber === contactOrNum)
      //return the right message saying that the person is being contacted
      return `Calling ${contactFinder.name}...`
    }


    // //else, find the contact within the contacts array using a find method, and store the found contact in a variable
    // const calledByName = this.contacts.find((contact) => contact.name === contactOrNum);
    // const calledByNum = this.contacts.find((contact) => contact.phoneNumber === contactOrNum);

    //guard clause if contact isn't found, but the number given is 10 digits
    if (this.contacts.find((contact) => contact.name === contactOrNum) === undefined || contactOrNum && contactOrNum.length === 10 && isNaN(Number(contactOrNum))) {
      return `Calling ${contactOrNum}...`
    }

    // //return the right message saying that the person is being contacted
    // return `Calling ${calledByName.name || calledByNum.name}...`


  }


  addContact(contact) {
    //guard clauses
    if (!contact.name || !contact.phoneNumber) {
      return `Invalid`
    } else if (contact.phoneNumber.length !== 10) {
      return `Invalid`
    }

    this.contacts.push(contact)
    return `${contact.name} added.`
  }

  removeContact(contactName) {
    //guard clause
    if (this.contacts.find((contact) => contact.name === contactName) === undefined) {
      return "Contact not found."
    }
    const indexOfContact = this.contacts.indexOf((contact) => contact.name === contactName)
    //had to make the index of contact less than the actual position so splice would target the index before the contact we want removed, and make it delete the element indexed in front of it (the contact we want deleted)
    this.contacts.splice(indexOfContact - 1, 1)
    return `${contactName} removed.`
  }


}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber)
    this.model = model
  }

  sendIMessage(phoneType, iMessage) {
    if (phoneType instanceof AppleIPhone === false) {
      console.log(phoneType)
      console.log(phoneType.hasOwnProperty('model'))
      return 'Message could not be sent.'
    } else if (phoneType.hasOwnProperty('model') === true) {
      return `Message: ${iMessage} - sent from ${this.model}`
    }


  }

}



module.exports = {
  Phone,
  AppleIPhone,
};
