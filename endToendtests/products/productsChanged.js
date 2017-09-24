'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

let id  = 0;
const product = { 'name' : 'Product Changed Test', 'description' : 'e2e Test' };

it('products change scenario', function (done) {

//Creating new Test Product
request(app)
  .post('/products')
  .send({
    name: 'Product Changed Test',
    description: 'e2e Test',
    upc: '1111',
    type: 'Test',
    model: 'TestModel',
    price: 1,
    shipping: 1
    })
    .expect(201)
    .end(function (err, result) {
      if (err) { assert.ifError(err); }
      // Ensure we got an auto-generated ID
      id = result.body.id;
      assert.ok(id);

      done();
    });

//Make sure product was created and it is correct
request(app)
    .get('/products/${id}')
    .expect(200)
    .end(function (err, result) {
      if (err) { assert.ifError(err); }
      let body = result.body;

      assert.equal(body.name, product.name);
      assert.equal(body.description, product.description);

      done();
    });

//change name and description of Test Product and test that name and description were changed
request(app)
    .patch('/products/${id}')
    .send({
      name: 'Product Changed Test Changed',
      description: 'e2e Test Changed',
      upc: '1111',
      type: 'Test',
      model: 'TestModel',
      price: 1,
      shipping: 1
      })
    .expect(200)
    .end(function (err, result) {
      if (err) { assert.ifError(err); }
      let body = result.body;

      assert.notEqual(body.name, product.name);
      assert.notEqual(body.description, product.description);

      done();
    });
  });
