const request = require('supertest');
const app = require('../server.js');

describe('controller', () => {
  it('should return a list of todos', async () => {
    const res = await request(app)
      .get('/todos')
      .expect('Content-Type', /json/);

      expect(res.body).toBeInstanceOf(Object);
  });

  it('should return a todo by ID', async () => {
    const res = await request(app)
      .get('/todos/1')
      .expect('Content-Type', /json/);

    expect(res.body).toBeInstanceOf(Object);
  });

  it('should create a new todo', async () => {
    const todoData = {
      id: '3',
      title: 'New Todo',
      description: 'A new todo item',
      completed: false,
    };

    const res = await request(app)
      .post('/todos')
      .send(todoData)
      .expect('Content-Type', /json/);

    expect(res.body).toBeInstanceOf(Object);
  });

  it('should delete a todo', async () => {
    const res = await request(app)
      .delete('/todos/3')
      .expect('Content-Type', /json/);

    expect(res.body).toBeInstanceOf(Object);
  });
});
