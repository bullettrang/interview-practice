const oneaway=require('./index');

test('testing for function existence',()=>{
    expect(typeof oneaway).toEqual('function');
});

test('pale , ple',()=>{
    expect(oneaway('pale','ple')).toEqual(true);
});

test('pales , pale',()=>{
    expect(oneaway('pales','pale')).toEqual(true);
});

test('pale , bale',()=>{
    expect(oneaway('pale','bale')).toEqual(true);
});

test('pale , bake',()=>{
    expect(oneaway('pale','bake')).toEqual(false);
});