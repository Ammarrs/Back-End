const chai = require('./setup'); // Ensure to import the setup file
const expect = chai.expect;
const server = require('../index'); // Adjust the path to your Express app
const Product = require('../models/product');
const Category = require('../models/category');

describe('Products', () => {
  let createdCategoryId;
  let createdProductId;

  before(async () => {
    await Category.sync({ force: true });
    await Product.sync({ force: true });

    const category = await Category.create({ name: 'Test Category' });
    createdCategoryId = category.id;
  });

  it('should create a product', (done) => {
    chai.request(server)
      .post('/api/products')
      .send({ name: 'Test Product', price: 10.99, categoryId: createdCategoryId })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name', 'Test Product');
        expect(res.body).to.have.property('price', 10.99);
        expect(res.body).to.have.property('categoryId', createdCategoryId);
        createdProductId = res.body.id; // Save the ID for future tests
        done();
      });
  });

  it('should get all products', (done) => {
    chai.request(server)
      .get('/api/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a product by id', (done) => {
    chai.request(server)
      .get(`/api/products/${createdProductId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', createdProductId);
        expect(res.body).to.have.property('name', 'Test Product');
        expect(res.body).to.have.property('price', 10.99);
        expect(res.body).to.have.property('categoryId', createdCategoryId);
        done();
      });
  });

  it('should update a product by id', (done) => {
    chai.request(server)
      .put(`/api/products/${createdProductId}`)
      .send({ name: 'Updated Product', price: 15.99 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', createdProductId);
        expect(res.body).to.have.property('name', 'Updated Product');
        expect(res.body).to.have.property('price', 15.99);
        done();
      });
  });

  it('should delete a product by id', (done) => {
    chai.request(server)
      .delete(`/api/products/${createdProductId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  it('should return 404 for a deleted product', (done) => {
    chai.request(server)
      .get(`/api/products/${createdProductId}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
