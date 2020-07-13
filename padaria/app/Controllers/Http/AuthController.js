'use strict'
const User = use('App/Models/User');

class AuthController {
  //criando métodos
  async index({ request, response, view }) {

    return await User.all();
  }

  async register({ request, response }) {
    const data = request.only([
      'name',
      'lastname',
      'username',
      'email',
      'contact',
      'address',
      'password'
    ])



    const user = await User.create(data)
    return response.redirect('/')
  }

  // ********************************



}
module.exports = AuthController
