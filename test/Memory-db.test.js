const MemoryDatabase = require('../lib/Memory-db');

describe('MemoryDatabase', () => {
  let memory = null;
  beforeEach(() => {
    memory = new MemoryDatabase();
  });

  it('creates empty store object', () => {
    expect(memory.store).toEqual({});
  });

  it('creates uuid object for dog', () => {
    const dog = {
      name: 'spot',
      sex: 'female',
    };

    const expected = {
      name: 'spot',
      sex: 'female',
      _id: expect.any(String)
    };
    
    expect(memory.create(dog)).toEqual(expected);
  });

  it('find object by the id', () => {
    const userDog = {
      name: 'spot',
      sex: 'female'
    };

    const createUserDog = memory.create(userDog);
    const id = createUserDog._id;
  
    expect(memory.findById(id)).toEqual(createUserDog);
  });
});
