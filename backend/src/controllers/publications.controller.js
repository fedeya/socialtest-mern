const Public = require("../models/publication");

let publicCtrl = {}

publicCtrl.getPublics = async (req, res) => {

  let publications = await Public.find();

  res.json(publications);
}

publicCtrl.createPublic = async (req, res) => {

  const { title,  content, author } = req.body;

  const newPublication = new Public({
    title,
    content,
    author
  });

  await newPublication.save();

  res.json({message: "Publication Created"});
}

publicCtrl.getPublic = async (req, res) => {
  
  const publication = await Public.findById(req.params.id);

  res.json(publication);

}

publicCtrl.editPublic = async (req, res) => {

  const { title, content } = req.body;

  await Public.findByIdAndUpdate(req.params.id, {
    title,
    content
  })

  res.json({message: "Publication Edited"});
}

publicCtrl.deletePublic = async (req, res) => {

  await Public.findByIdAndDelete(req.params.id);

  res.json({message: "Publication Deleted"});

}

module.exports = publicCtrl;