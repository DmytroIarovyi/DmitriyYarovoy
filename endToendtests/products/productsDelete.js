'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

let id  = 0;
const product = { 'name' : 'Product Deleted Test', 'description' : 'e2e Test Deleted' };

it('products delete scenario', function (done) {

//Creating new Test Product
request(app)
  .post('/products')
  .send({
    name: 'Product Deleted Test',
    description: 'e2e Test Deleted',
    upc: '22222',
    type: 'Test1',
    model: 'TestModel1',
    price: 2,
    shipping: 2
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

//Delete the product
request(app)
    .delete('/products/${id}')
    .expect(200)
    .end(function (err, result) {
      if (err) {assert.ifError(err); }
      let body = result.body;

      assert.equal(body.name, product.name);

      done();
    });

//try to get product, ensure response is 404 NotFound
    request(app)
        .get('/products/${id}')
        .expect(404, done);
  });
