const { Router } = require("express");
const { getUsers, getUser, editUser, deleteUser  } = require("../controllers/users.controller");

const router = Router();

router.route("/")
  .get(getUsers)

router.route("/:id")
  .get(getUser)
  .put(editUser)
  .delete(deleteUser)

module.exports = router;