import { HttpContext } from '@adonisjs/core/http'
import getErrorMessage from '../../utils/functions/errorMessage.js'
import User from '#models/user'

export default class UsersController {
  /**
   * Create a new user.
   */
    async create({ request, response }: HttpContext) {
        try {
          const { username, email, password } = request.body()
          console.log(username, email, password)
        
          const user = await User.create({
            email,
            username,
            password,
            role: 0, // Assuming 'role' is a field in your User model
          })
      
          return response.status(201).json({ message: 'User created', user })
        } catch (error) {
          response.status(500).json({ error: getErrorMessage(error) })
        }
    }

  /**
   * Get all users.
   */
    async index({ response }: HttpContext) {
        try {
          const users = await User.all()

          return response.status(200).json(users)
        } catch (error) {
          response.status(500).json({ error: getErrorMessage(error) })
        }
    }

  /**
   * Get a single user by ID.
   */
    async show({ params, response }: HttpContext) {
        try {
          const user = await User.findOrFail(params.id)

          return response.status(200).json(user)
        } catch (error) {
          response.status(404).json({ error: 'User not found' })
        }
    }

  /**
   * Update a user by ID.
   */
    async update({ params, request, response }: HttpContext) {
        try {
          const { username, email } = request.body()
          const user = await User.findOrFail(params.id)

          user.merge({ username, email })
          await user.save()

          return response.status(200).json({ message: 'User updated', user })
        } catch (error) {
          response.status(500).json({ error: getErrorMessage(error) })
        }
    }

  /**
   * Delete a user by ID.
   */
    async destroy({ params, response }: HttpContext) {
        try {
          const user = await User.findOrFail(params.id)

          await user.delete()

          return response.status(200).json({ message: 'User deleted' })
        } catch (error) {
          response.status(500).json({ error: getErrorMessage(error) })
        }
    }
}
