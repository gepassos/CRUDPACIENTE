const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/pacienteModel')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

mongoose.connect("mongodb://0.0.0.0:27017/myDB")
    .catch(err => console.log(err))

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
    Post.findByIdAndDelete({ _id: req.params.id }).then(doc => {
        console.log(doc)
        res.status(200).send("Deletado com sucesso.")
    })
        .catch((err) => {
            console.log(err)
            res.status(500).send("erro ao deletar.")
        });



})

app.put("/update/:id", (req, res) => {
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
});


app.post("/create", (req, res) => {
    Post.create({
        nomePaciente: req.body.nomePaciente,
        laudo: req.body.laudo,
    })
        .then(doc => {
            console.log(doc)
            res.status(200).json({ message: "Post created successfully", post: doc })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Failed to create post" });
        })

}); 