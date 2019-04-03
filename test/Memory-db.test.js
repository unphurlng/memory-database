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
    // arrange : object/user input
    const dog = {
      name: 'spot',
      sex: 'female',
    };

    // act : created object = create a uuid + add
    const expected = {
      name: 'spot',
      sex: 'female',
      _id: expect.any(String)
    };
    
    // assert
    expect(memory.create(dog)).toEqual(expected);
  });

  it('find object by the id', () => {
    //arrange
    const userDog = {
      name: 'spot',
      sex: 'female'
    };
    
    const createUserDog = memory.create(userDog);
    const id = createUserDog._id;
  
    //assert
    expect(memory.findById(id)).toEqual(createUserDog);
  });
});


