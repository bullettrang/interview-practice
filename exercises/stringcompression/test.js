const stringcompression = require('./index');

test('testing if func exists',()=>{
    expect(typeof stringcompression).toEqual('function');
});

test('aabcccccaaa returns a2b1c5a3',()=>{
    expect(stringcompression('aabcccccaaa')).toEqual('a2b1c5a3');
});

test('aabc returns aabc',()=>{
    expect(stringcompression('aabc')).toEqual('aabc');
});