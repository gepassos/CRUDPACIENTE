const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()

app.get('/', (req, res) => {

    res.send('HELLO')
})

app.listen(3001, function () {
    console.log('server is dying');

})