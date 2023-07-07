const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    nomePaciente: String,
    laudo: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;