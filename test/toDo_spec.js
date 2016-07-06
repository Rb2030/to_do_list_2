var expect = require('chai').expect
var toDo = require('../models/toDo.js').toDo

describe('test checker', function () {

  it('5 + 5 = 10', function () {
    expect(5 + 5).to.equal(10);
  })

  it('stores task', function () {
    toDo = new toDo
    toDo.add("fish")
    expect(toDo.getTask).to.equal("fish")
  })
})
