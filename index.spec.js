const request = require('supertest');
const app = require('./index.js');

describe('CI Test App', () => {
  const agent = request.agent(app);
  it('should return hello world', (done) => {
    agent.get('/')
      .expect(200)
      .expect('Hello World', done)
  });
});