const { Router } = require("express");
const { getPublics, getPublic, createPublic, editPublic, deletePublic  } = require("../controllers/publications.controller");

const router = Router();

router.route("/")
  .get(getPublics)
  .post(createPublic)

router.route("/:id")
  .get(getPublic)
  .put(editPublic)
  .delete(deletePublic)

module.exports = router;