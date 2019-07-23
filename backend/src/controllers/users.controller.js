const User = require("../models/user");

let usersCtrl = {}

usersCtrl.getUsers = async (req, res) => {

  const users = await User.find({},"username email fullName role");

  res.json(users);

}

usersCtrl.getUser = async (req, res) => {
  
  const user = await User.findById(req.params.id, "username email fullName role");

  res.json(user);

}

usersCtrl.editUser = async (req, res) => {

  const user = await User.findById(req.params.id);

  const { fullName, password, date } = req.body;

  await User.findByIdAndUpdate(req.params.id, {
    fullName: fullName || user.fullName,
    password: password || user.password,
    date: date || user.date
  })

  res.json({message: "User Edited"})

}

usersCtrl.deleteUser = async (req, res) => {

  await User.findByIdAndDelete(req.params.id);

  res.json({message: "User Deleted"});

}

module.exports = usersCtrl;