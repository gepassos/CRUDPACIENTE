const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const pacienteRoutes = require('./routes/pacienteRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/myDB")
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('HELLO');
});

app.use('/posts', pacienteRoutes);

app.listen(3001, function () {
  console.log('server is dying');
});