var chai = require('chai')

chai.should()
var expect = chai.expect
var assert = chai.assert

var tasks = require('../../lib/tasks');
var { AT_RIGHT_TIME } = require('../../lib/constants');
var EventEmitter = require('events');

describe('tasks', function () {
  it('should have single task', function () {
    assert.isNotEmpty(tasks)
    expect(tasks[0]).to.have.property('handle').that.is.a('function')
    expect(tasks[0]).to.have.property('name')
    expect(tasks[0]).to.have.property('schedule')
  });

  it('should trigger task handle', function (done) {
    var task = tasks[0]

    const myEmitter = new EventEmitter();
    myEmitter.on('AT_RIGHT_TIME', (message) => {
      expect(message).to.be.equal(task.name)
      done()
    });
    task.handle({ attrs: { name: task.name } }, function () {
      done()
    })
  });
});
