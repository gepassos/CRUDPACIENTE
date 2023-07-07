const Post = require('../models/pacienteModel');

exports.getPosts = (req, res) => {
  Post.find()
    .then(items => res.json(items))
    .catch(err => console.log(err));
};

exports.deletePost = (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.id })
    .then(doc => {
      console.log(doc);
      res.status(200).send("Deletado com sucesso.");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("erro ao deletar.");
    });
};

exports.updatePost = (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      nomePaciente: req.body.nomePaciente,
      laudo: req.body.laudo,
    },
    { new: true }
  )
    .then((doc) => {
      const { nomePaciente, laudo } = doc;
      res.status(200).json({
        nomePaciente,
        laudo,
        message: "Dados atualizados com sucesso.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Erro ao atualizar os dados.");
    });
};

exports.createPost = (req, res) => {
  Post.create({
    nomePaciente: req.body.nomePaciente,
    laudo: req.body.laudo,
  })
    .then(doc => {
      console.log(doc);
      res.status(200).json({ message: "Post created successfully", post: doc });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Failed to create post" });
    });
};