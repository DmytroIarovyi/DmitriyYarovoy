'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

let guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
let id = 0;

const category = { 'name' : 'fake category', 'id' : guid };

//unique guids generator
function S4()
{
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

it('categories delete scenario', function (done) {

//Creating new Test category
request(app)
  .post('/categories')
  .send(
    {
    name: 'fake category',
    id: guid
    })
    .expect(201)
    .end(function (err, result)
    {
      if (err) { assert.ifError(err); }
      id = result.body.id;
      assert.ok(id);

      done();
    });

    //Make sure category was created and it is correct
    request(app)
        .get('/categories/${id}')
        .expect(200)
        .end(function (err, result) {
          if (err) { assert.ifError(err); }
          let body = result.body;

          assert.equal(body.name, category.name);

          done();
        });

//Delete the category
request(app)
    .delete('/categories/${id}')
    .expect(200)
    .end(function (err, result) {
      if (err) {assert.ifError(err); }
      let body = result.body;

      assert.equal(body.name, category.name);

      done();
    });

//try to get category, ensure response is 404 NotFound
    request(app)
        .get('/categories/${id}')
        .expect(404, done);
  });
