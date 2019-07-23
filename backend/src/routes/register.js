const { Router } = require("express");
const { createUser } = require("../controllers/register.controller");

const router = Router();

router.route("/")
  .post(createUser)

module.exports = router;