'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

let id  = 0;
const store = { 'name' : 'Store Change Test', 'address' : 'Wrong street' };

it('stores change scenario', function (done) {

//Creating new Test Store
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

//change name and description of Test Store and test that name and address were changed
request(app)
    .patch('/stores/${id}')
    .send({
      name: 'Store Change Test Changed',
      address: 'Wrong street Changed',
      city: 'TestCity',
      state: 'Unknown',
      zip: '11111'
      })
    .expect(200)
    .end(function (err, result) {
      if (err) { assert.ifError(err); }
      let body = result.body;

      assert.notEqual(body.name, store.name);
      assert.notEqual(body.address, store.address);

      done();
    });
  });
