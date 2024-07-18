/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world Axel',
  }
})

router.post('/users', [UsersController, "create"])
router.get('/users', [UsersController, "index"])
router.get('/users/:id', [UsersController, "show"])
router.put('/users/:id', [UsersController, "update"])
router.delete('/users/:id', [UsersController, "destroy"])

