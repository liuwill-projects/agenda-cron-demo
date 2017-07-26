process.env.UNIT_TEST = 'mocha'

const app = require('../../lib')
const request = require('supertest');
var assert = require('assert');

var chai = require('chai')

chai.should()
var expect = chai.expect

app.disable('etag');

describe('GET /', function () {
  it('should show index', function (done) {
    request(app).get('/')
      .expect(200)
      .end(function (err, res) {
        expect(res).have.property('text')
        done()
      });
  });
});

describe('GET /user', function () {
  it('respond with json', function (done) {
    request(app).get('/user')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '18')
      .expect(200)
      .end(function (err, res) {
        expect(err).to.be.null
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
        //assert(res.body.jobs.length, 0)
        //assert(res.body.jobs.length, 1)
        //assert(res.body.jobs[0].job.name, 'delete old users')
      })
      .end(done)
  })
})
