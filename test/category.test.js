const chai = require("./setup"); // Ensure to import the setup file
const expect = chai.expect;
const server = require("../index"); // Adjust the path to your Express app
const Category = require("../models/category");

describe("Categories", () => {
  before(async () => {
    await Category.sync({ force: true });
  });

  let createdCategoryId;

  it("should create a category", (done) => {
    chai
      .request(server)
      .post("/api/categories")
      .send({ name: "Test Category" })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("name", "Test Category");
        createdCategoryId = res.body.id; // Save the ID for future tests
        done();
      });
  });

  it("should get all categories", (done) => {
    chai
      .request(server)
      .get("/api/categories")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should get a category by id", (done) => {
    chai
      .request(server)
      .get(`/api/categories/${createdCategoryId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("id", createdCategoryId);
        expect(res.body).to.have.property("name", "Test Category");
        done();
      });
  });

  it("should update a category by id", (done) => {
    chai
      .request(server)
      .put(`/api/categories/${createdCategoryId}`)
      .send({ name: "Updated Category" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("id", createdCategoryId);
        expect(res.body).to.have.property("name", "Updated Category");
        done();
      });
  });

  it("should delete a category by id", (done) => {
    chai
      .request(server)
      .delete(`/api/categories/${createdCategoryId}`)
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });

  it("should return 404 for a deleted category", (done) => {
    chai
      .request(server)
      .get(`/api/categories/${createdCategoryId}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
