const palindromePermutation = require('./index');

test('does func exists',()=>{
    expect(typeof palindromePermutation).toEqual('function');
});

test('single char is a palindrome always',()=>{
    expect(palindromePermutation('a')).toEqual(true);
});

test('double duplicate chars is a palindrome',()=>{
    expect(palindromePermutation('bb')).toEqual(true);
});

test('2-unique chars is a NOT a palindrome',()=>{
    expect(palindromePermutation('bc')).toEqual(false);
});

test('tact coa is a permutation of a palindrome',()=>{
    expect(palindromePermutation('tact coa')).toEqual(true);
});

test('llell',()=>{
    expect(palindromePermutation('llell')).toEqual(true);
});