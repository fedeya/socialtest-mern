const User = require("../models/user");
const bcrypt = require("bcrypt");

registerCtrl = {}

registerCtrl.createUser = async (req, res) => {

  const { username, email, fullName, date, password } = req.body;

  const newUser = new User({
    username,
    email,
    fullName,
    date,
    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
  });

  try {
    await newUser.save();
    res.json({message: "User Created"});
  }catch(e){
    res.json(e)
  }


}

module.exports = registerCtrl