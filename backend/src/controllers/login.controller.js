const User = require("../models/user");
const bcrypt = require("bcrypt");

let loginCtrl = {}

loginCtrl.login = async (req, res) => {

  let { email, password } = req.body;
  let message;

  const user = await User.find({ email }, "username email fullName role password")

  if (user.length !== 0) {
    password = bcrypt.compareSync(password, user[0].password);
    message = password ? user[0] : "La Contraseña no es Correcta";
  }else{
    message = "La Cuenta no Existe";
  }

  res.json(message);

}

module.exports = loginCtrl;