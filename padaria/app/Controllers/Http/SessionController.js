'use strict'

class SessionController {
  async create({ request, auth, response }) {
    const { login, password } = request.all()

    await auth.attempt(login, password)



    return response.redirect('/index2')

  }

  // ********
}



module.exports = SessionController
