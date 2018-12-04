const urlify = require('./index');

test('testing if function exists',()=>{
    expect(typeof urlify).toEqual('function');
});

test('testing Mr John Smith',()=>{
    expect(urlify('Mr John Smith')).toEqual('Mr%20John%20Smith');
});

test('testing empty string',()=>{
    expect(urlify('')).toEqual('');
});

test('str with no spaces',()=>{
    expect(urlify('google')).toEqual('google');
});

