const request = require("supertest");
const app = require("../server.js");

describe("GET /todos", () => {
  it("should respond with an array of todos", (done) => {
    request(app)
      .get("/api/todos")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /todos/:id", () => {
  it("should respond with a specific todo", (done) => {
    request(app)
      .get("/api/todos/1")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("should respond with 'Todo not found' for a non-existing todo", (done) => {
    request(app)
      .get("/api/todos/999")
      .expect("Content-Type", /json/)
      .expect(404, { error: "Todo not found" }, done);
  });
});

describe("POST /todos", () => {
  it("should create a new todo", (done) => {
    request(app)
      .post("/api/todos")
      .send({ title: "New Todo" })
      .expect("Content-Type", /json/)
      .expect(201, done);
  });

  it("should respond with 'An error occurred' if title is missing", (done) => {
    request(app)
      .post("/api/todos")
      .send({})
      .expect("Content-Type", /json/)
      .expect(500, { error: "An error occurred" }, done);
  });
});

describe("DELETE /todos/:id", () => {
  it("should delete a todo", (done) => {
    request(app)
      .delete("/api/todos/1")
      .expect("Content-Type", /json/)
      .expect(200, { message: "Todo deleted" }, done);
  });

  it("should respond with 'Todo not found' for deleting a non-existing todo", (done) => {
    request(app)
      .delete("/api/todos/999")
      .expect("Content-Type", /json/)
      .expect(404, { error: "Todo not found" }, done);
  });
});