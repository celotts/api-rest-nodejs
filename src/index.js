'use strict'

const express = require('express');

const app = express();


const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.get('/hola', (req, res) => { res.send({message:'Hola Mundo Lott'}) });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})