const { getAllUser, postUser } = require("../controller/user.controller");

const Router = require("express").Router();

Router.get("/user", getAllUser);

Router.post("/user", postUser);

module.exports = Router;
