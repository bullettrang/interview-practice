const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});


// return (words.map(   word=>word.split('').reduce((substr, letter) => substr+t[letter],"")   )).filter((v,k,self) => self.indexOf(v) == k).length;