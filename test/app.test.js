
const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

test('GET / returns the project message', async (t) => {
  const server = app.listen(0, '127.0.0.1');

  await new Promise((resolve) => server.once('listening', resolve));
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/`);
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.status, 'success');
  assert.equal(data.project, 'Node.js Demo App');
});

test('GET /health returns healthy', async (t) => {
  const server = app.listen(0, '127.0.0.1');

  await new Promise((resolve) => server.once('listening', resolve));
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/health`);
  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.status, 'healthy');
});
