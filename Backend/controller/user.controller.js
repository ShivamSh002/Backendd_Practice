const User = require("../Model/user.model");

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

const deleteUser = async (req, res) => {
  try {
    console.log(req.body);
    const users = await User.deleteOne(req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await User.findOneAndUpdate({ id: taskId }, req.body, {
      new: true,
    });

    res.status(200).json(task);
  } catch (e) {}
};

const patchUpdateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await User.findOneAndUpdate({ id: id }, req.body, {
      new: true,
      overwrite: true,
    });

    res.status(200).json(task);
  } catch (e) {}
};

const searchUser = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const users = await User.findOne({ id: +id });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllUser,
  postUser,
  deleteUser,
  updateUser,
  searchUser,
  patchUpdateUser,
};
