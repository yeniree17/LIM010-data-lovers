global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


// describe('example', () => {
//   it('debería ser una función', () => {
//     assert.equal(typeof example, 'function');
//   }); 

//   it('debería retornar "example"', () => {
//     assert.equal(example(), 'example');
//   });
// });

// test variable global
describe('bancoMundial', () => {
  it('deberia de ser un objeto', () => {
    expect(typeof bancoMundial).toBe('object');
  });
});