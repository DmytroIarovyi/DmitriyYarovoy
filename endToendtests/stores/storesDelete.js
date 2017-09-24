'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

let id  = 0;
const store = { 'name' : 'Store Change Test', 'address' : 'Wrong street' };

it('stores delete scenario', function (done) {

//Creating new Test store
request(app)
  .post('/stores')
  .send({
    name: 'Store Change Test',
    address: 'Wrong street',
    city: 'TestCity',
    state: 'Unknown',
    zip: '11111'
    })
    .expect(201)
    .end(function (err, result) {
      if (err) { assert.ifError(err); }
      // Ensure we got an auto-generated ID
      id = result.body.id;
      assert.ok(id);

      done();
    });

    //Make sure store was created and it is correct
    request(app)
        .get('/stores/${id}')
        .expect(200)
        .end(function (err, result) {
          if (err) { assert.ifError(err); }
          let body = result.body;

          assert.equal(body.name, store.name);
          assert.equal(body.address, store.address);

          done();
        });

//Delete the store
request(app)
    .delete('/stores/${id}')
    .expect(200)
    .end(function (err, result) {
      if (err) {assert.ifError(err); }
      let body = result.body;

      assert.equal(body.name, store.name);

      done();
    });

//try to get store, ensure response is 404 NotFound
    request(app)
        .get('/stores/${id}')
        .expect(404, done);
  });
