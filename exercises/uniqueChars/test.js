const isUniqueChars = require('./index');

test('isUnique function exists',()=>{
    expect(typeof isUniqueChars).toEqual('function');
});

//arg amy should return true

test('passing in unique string',()=>{
    expect(isUniqueChars('amy')).toEqual(true);
});

//arg melissa returns false
test('passing in non unique string',()=>{
    expect(isUniqueChars('melissa')).toEqual(false);
});

//arg a returns true
test('passing in str of length 1',()=>{
    expect(isUniqueChars('a')).toEqual(true);
});

test('passing unique special char only str',()=>{
    expect(isUniqueChars('@#$%')).toEqual(true);
});

test('passing non-unique special char only str',()=>{
    expect(isUniqueChars('@#$%@')).toEqual(false);
});