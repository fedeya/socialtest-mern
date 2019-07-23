const Comment = require("../models/comment");

let commentCtrl = {};

commentCtrl.getComments = async (req, res) => {

  const comments = await Comment.find({public_id: req.params.public_id});
  const cantidad = await Comment.count({public_id: req.params.public_id});

  res.json({
    comments,
    cantidad
  });

}

commentCtrl.createComment = async (req, res) => {
  
  const { public_id, content, author } = req.body;

  const newComment = new Comment({
    public_id,
    content,
    author
  });

  await newComment.save();

  res.json({message: "Comment Created"});

}

commentCtrl.editComment = async (req, res) => {
  
  const { content } = req.body;

  await Comment.findByIdAndUpdate(req.params.id, {
    content
  })

  res.json({message: "Comment Edited"})

}

commentCtrl.deleteComment = async (req, res) => {

  await Comment.findByIdAndDelete(req.params.id);

  res.json({message: "Comment Deleted"});

}

module.exports = commentCtrl;