const uuid = require('uuid/v4');

module.exports = class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(object) {
    const uid  = uuid();
    const userObject = { ...object, _id: uid };
    this.store[uid] = userObject;
    return userObject;
  }

  findById(id) {
    return this.store[id];
  }
};
