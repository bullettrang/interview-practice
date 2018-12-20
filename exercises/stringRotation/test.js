const stringRotation = require('./index');

test('string rotation function exists', () => {
  expect(typeof stringRotation).toEqual('function');
});

test('waterbottle is rotation of erbottlewat', () => {
  expect(stringRotation('waterbottle','erbottlewat')).toEqual(true);
});

test('booger ogerbo', () => {
  expect(stringRotation('booger','ogerbo')).toEqual(true);
});

test('ugly agly', () => {
    expect(stringRotation('ugly','algy')).toEqual(false);
  });