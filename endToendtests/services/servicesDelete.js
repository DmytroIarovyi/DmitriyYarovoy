'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

let id  = 0;
const service = { 'name' : 'ServiceChange' };

it('services delete scenario', function (done) {

//Creating new Test services
request(app)
  .post('/services')
  .send({
    name: 'ServiceChange',
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

//Delete the service
request(app)
    .delete('/services/${id}')
    .expect(200)
    .end(function (err, result) {
      if (err) {assert.ifError(err); }
      let body = result.body;

      assert.equal(body.name, service.name);

      done();
    });

//try to get service, ensure response is 404 NotFound
    request(app)
        .get('/services/${id}')
        .expect(404, done);
  });
