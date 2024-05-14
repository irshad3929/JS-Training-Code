const obj = {
    [Symbol('foo')]: 'value',
    [Symbol('foo')]: 'value',
    ['hello']:'hello',
    key: 'value'
  };
  
  console.log(Object.values(obj)); // Output: ['key']
  console.log(Object.getOwnPropertySymbols(obj)); // Output: [Symbol(foo), Symbol(bar)]
  