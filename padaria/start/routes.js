'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index');
Route.on('/register').render('cadastro');
Route.on('/sessions').render('cadastro');
Route.on('/index2').render('index2').middleware('auth');
// *******************************************
Route.get("/logout", async ({ auth, response }) => {
  await auth.logout();
  return response.redirect("/");
})

// Route.on('/register').render('cadastro');
Route.get("/viewregister", "AuthController.index");
Route.post("/register", "AuthController.register");
Route.post("/pedidos", "AdicionarController.setAdicionar");
// Route.get("/register", "AuthController.register");
Route.get("/sessions", "SessionController.create");
Route.post("/sessions", "SessionController.create");
