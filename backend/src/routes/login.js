const { Router } = require("express");
const { login } = require("../controllers/login.controller");

const router = Router();

router.route("/")
  .post(login)

module.exports = router;