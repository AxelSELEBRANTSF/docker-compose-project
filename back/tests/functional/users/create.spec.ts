import { test } from '@japa/runner'
import User from '#models/user'

test.group('User CRUD', () => {
  test('create a user', async ({ client, assert }) => {
    const response = await client.post('/users').json({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password',
    })

    response.assertStatus(201)
    assert.equal(response.body().username, 'testuser')
    assert.equal(response.body().email, 'testuser@example.com')
    assert.equal(response.body().password, "password")

    // Clean up
    const user = await User.find(response.body().id)
    await user?.delete()
  })

  test('get a user', async ({ client, assert }) => {
    // Create user
    const user = await User.create({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password',
    })

    const response = await client.get(`/users/${user.id}`)

    response.assertStatus(200)
    assert.equal(response.body().id, user.id)
    assert.equal(response.body().username, user.username)
    assert.equal(response.body().email, user.email)

    // Clean up
    await user.delete()
  })

  test('update a user', async ({ client, assert }) => {
    // Create user
    const user = await User.create({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password',
    })

    const response = await client.put(`/users/${user.id}`).json({
      username: 'updateduser',
    })

    response.assertStatus(200)
    assert.equal(response.body().username, 'updateduser')

    // Clean up
    await user.delete()
  })

  test('delete a user', async ({ client, assert }) => {
    // Create user
    const user = await User.create({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password',
    })

    const response = await client.delete(`/users/${user.id}`)

    response.assertStatus(200)

    const deletedUser = await User.find(user.id)
    assert.isNull(deletedUser)
  })
})
