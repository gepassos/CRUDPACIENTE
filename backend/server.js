const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myDB")
    .catch(err => console.log(err))

const postSchema = mongoose.Schema({

    nomePaciente: String,
    laudo: String
})

const Post = mongoose.model("Post", postSchema);


app.get('/', (req, res) => {

    res.send('HELLO')
})

app.listen(3001, function () {
    console.log('server is dying');

})

app.get("/posts", (req, res) => {
    Post.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
})

app.delete("/delete/:id", (req, res) => {
    Post.findByIdAndDelete({ _id: req.params.id }).then(doc => console.log(doc))
        .catch((err) => console.log(err));



})

app.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate(
        { _id: req.params.id },
        {
            nomePaciente: req.body.nomePaciente,
            laudo: req.body.laudo,
        }
    )
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});


app.post("/create", (req, res) => {
    Post.create({
        nomePaciente: req.body.nomePaciente,
        laudo: req.body.laudo,
    })
        .then(doc => console.log(doc))
        .catch(err => console.log(err))

}); 