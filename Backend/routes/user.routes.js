const {
  getAllUser,
  postUser,
  deleteUser,
  updateUser,
  searchUser,
  patchUpdateUser,
} = require("../controller/user.controller");

const Router = require("express").Router();

Router.get("/", getAllUser);

Router.get("/:id", searchUser);

Router.post("/", postUser);

Router.delete("/", deleteUser);

Router.put("/:id", updateUser);

Router.patch("/:id", patchUpdateUser);

module.exports = Router;
