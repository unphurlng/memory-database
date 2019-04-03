const uuid = require('uuid/v4');

module.exports = class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(object) {
    // generate uid
    const uid  = uuid();
    // add id to incoming object
    const userObject = { ...object, _id: uid };
    // add object to store
    this.store[uid] = userObject;
    // return unique id
    return userObject;
  }

  findById(id) {
    return this.store[id];
  }
};

// console.log(userObject);
