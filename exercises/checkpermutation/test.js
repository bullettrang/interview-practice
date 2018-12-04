const checkPermutation= require('./index');

test('function checkPermutation exists',()=>{
    expect(typeof checkPermutation).toEqual('function');
});

test('passing in permutation, should return true',()=>{
    expect(checkPermutation('amy','may')).toEqual(true);
});

test('passing in non-permutation, should return false',()=>{
    expect(checkPermutation('vato','caco')).toEqual(false);
});

test('passing in different length strings, should return false',()=>{
    expect(checkPermutation('mei','me')).toEqual(false);
});

test('passing in different case sensitive strings, should return false',()=>{
    expect(checkPermutation('Amy','may')).toEqual(false);
});

test('now is case INsensitive strings, should return true',()=>{
    expect(checkPermutation('Amy','may')).toEqual(true);
});