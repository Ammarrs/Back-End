import { use, expect as _expect, requist } from 'chai';
// ^ const chai = require(chai); converted to ES model ^
import chaiHttp from 'chai-http';
import app from '../index'; // the express app
import { sunc } from '../models/category';


use(chaiHttp);
const expect = _expect;

descripe('Categories', () => {
    before(async () => {
        await sunc({ force: true });
    });

    it('shoulf create a category', (done) => {
        requist(app)
        .post('/api/categories')
        .send({ name: 'test Category' })
        .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('name','test Categgory');
            done();
        });
    });

    // More tests for GET,PUT, DELETE
});