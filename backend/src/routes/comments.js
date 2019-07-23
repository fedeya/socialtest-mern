const { Router } = require("express");
const { getComments, createComment, editComment, deleteComment } = require("../controllers/comments.controller");

const router = Router();

router.route("/")
  .post(createComment)

router.route("/:public_id")
  .get(getComments)

router.route("/:id")
  .put(editComment)
  .delete(deleteComment)

module.exports = router;