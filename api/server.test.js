const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('./server');

test('sanity', () => {
  expect(true).toBe(true)
})

test('is the correct environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('post request for /register route', () => {
  test('responds with err when no username', async () => {
    const res = await request(server).post('/api/auth/register').send({
      username: '', 
      password: '1234',
    })
    expect(res.body).toMatchObject({message: 'username and password required'})
  })

  test('responds with err when no password', async () => {
    const res = await request(server).post('/api/auth/register').send({
      username: 'Ryan', 
      password: '',
    })
    expect(res.body).toMatchObject({message: 'username and password required'})
})
})

describe('post request for /login route', () => {
  test('responds with err when no username', async () => {
    const res = await request(server).post('/login').send({
      username: '', 
      password: '1234'
    })
    expect(res.status).toBe(404)
  })
  test('responds with err when no password', async () => {
    const res = await request(server).post('/api/auth/login').send({
      username: 'Ryan', 
      password: '',
    })
    expect(res.body).toMatchObject({message: 'username and password required'})
  })
})