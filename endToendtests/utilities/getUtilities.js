'use strict';

const assert = require('assert');
const app = require('../../../src/app');
const packageInfo = require('../../../package.json');
const request = require('supertest');

  it('get ultilities', function (done) {
    request(app)
      .get('/version')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.equal(body.version, packageInfo.version);

        done();
      });

      request(app)
        .get('/healthcheck')
        .expect(200)
        .end(function (err, result) {
          if (err) { assert.ifError(err); }
          let body = result.body;

          assert.ok(body.uptime);
          assert.ok(body.documents.products);
          assert.ok(body.documents.stores);
          assert.ok(body.documents.categories);

          done();
        });
  });
