process.env.UNIT_TEST = 'mocha'

const app = require('../lib')
const request = require('supertest');
var assert = require('assert');

app.disable('etag');

describe('GET /user', function() {
  it('respond with json', function(done) {
    request(app).get('/user')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '18')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        done()
      });
  });
});

describe('GET /agendash/api', function () {
  it('should return the correct overview', function (done) {
    request(app).get('/agendash/api')
    .expect(200)
    .expect(function (res) {
      assert(res.body.title, 'Agendash')
      assert(res.body.jobs.length, 1)
      assert(res.body.jobs[0].job.name, 'delete old users')
    })
    .end(done)
  })
})