global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
describe('Function filterData', () => {
  const data = [
    {
      name: 'Akali',
      tags: 'Assassin'
    },
    {
      name: 'Annie',
      tags: 'Mage'
    }
  ];
  it('debería retornar el objeto Akali al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'Assassin'), [{name: 'Akali', tags: 'Assassin'}] )
  });
  it('debería retornar el objeto Annie al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'Mage'), [{name: 'Annie', tags: 'Mage'}] )
  });

}),

describe('Funcion sortData' , () => {
const dataSort = [
 {
  name : 'Zyra'
 },
 {
  name :'Aatrox'
 }
]
  it('debería retornar en orden alfabético de Z a A el string Zira, luego Aatrox', () => {
    assert.deepEqual(window.sortData(dataSort,'name','ordenarZa'),
[
  {name :'Zyra'},
  {name : 'Aatrox'}
]);

});

it('deberia retornar en orden alfabético Aatrox y despues Zyra',()=>{
assert.deepEqual(window.sortData(dataSort,'name','ordenarAz'),
[
  {name :'Aatrox'
},
{name :'Zyra'
}
]);

});

});

describe('Funcion computeStats', () =>{
 const compute = [
  {
    tags: "Tank",

    calcule : 40
  }
 ];
it ('Debería retornar 40 al clickear Tank', () =>{
  assert.deepEqual(window.computeStats(compute,"Tank"),[{tags: "Tank",calcule : 40}]);
});


});