const UserRoutes = require("express").Router();
const UserController = require("./../controllers/user.controller.js");

UserRoutes.post("/createAccount", UserController.createAccount);
UserRoutes.post('/signIn',UserController.signIn);

module.exports = UserRoutes;
