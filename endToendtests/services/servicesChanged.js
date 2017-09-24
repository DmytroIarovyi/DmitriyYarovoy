'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

let id  = 0;
const service = { 'name' : 'ServiceChange' };

it('services change scenario', function (done) {

//Creating new service
request(app)
  .post('/services')
  .send({
    name: 'ServiceChange'
    })
    .expect(201)
    .end(function (err, result) {
      if (err) { assert.ifError(err); }
      // Ensure we got an auto-generated ID
      id = result.body.id;
      assert.ok(id);

      done();
    });

//Make sure service was created and it is correct
request(app)
    .get('/services/${id}')
    .expect(200)
    .end(function (err, result) {
      if (err) { assert.ifError(err); }
      let body = result.body;

      assert.equal(body.name, service.name);

      done();
    });

//change name and description of service and test that name and address were changed
request(app)
    .patch('/services/${id}')
    .send({
      name: 'ServiceChange Changed'
      })
    .expect(200)
    .end(function (err, result) {
      if (err) { assert.ifError(err); }
      let body = result.body;

      assert.notEqual(body.name, service.name);

      done();
    });
  });
