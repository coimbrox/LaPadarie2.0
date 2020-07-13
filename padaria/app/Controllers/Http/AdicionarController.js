'use strict'
const User = use("App/Models/User");

class AdicionarController {
  async setAdicionar({ request, auth }) {
    let { quantidade } = request.all();
    const cliente = await auth.getUser();
    const usuario = await User.find(cliente.id);
    let oldValue = usuario.pedidos

    quantidade = parseInt(quantidade);

    if (oldValue) {
      oldValue = parseInt(usuario.pedidos);
      const newValue = oldValue + quantidade;
      usuario.merge({ pedidos: newValue });
    } else {
      usuario.merge({ pedidos: quantidade })
    }
    await usuario.save();
    console.log(quantidade);
  }


}

module.exports = AdicionarController
