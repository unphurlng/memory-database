const MemoryDatabase = require('../lib/Memory-db');

describe('MemoryDatabase', () => {
  let memory = null;
  beforeEach(() => {
    memory = new MemoryDatabase();
  });

  it('creates empty store object', () => {
    const dog = {
      name: 'spot',
      sex: 'female',
      _id: expect.any(String)
    };
    const userObject = memory.create(dog);
    console.log('0000000000000', userObject);
    expect(memory.store[id]).toEqual(dog);
  });
});


