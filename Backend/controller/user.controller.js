const User = require("../Model/user.model");
const { param } = require("../routes/user.routes");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

const postUser = async (req, res) => {
  try {
    console.log(req.body);
    const users = await User.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { getAllUser, postUser };
