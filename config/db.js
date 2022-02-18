const { request } = require("express");

const mongoose = require('mongoose')

const url = 'mongodb+srv://Felipe:felipe123@cluster0.jnpzs.mongodb.net/planets?retryWrites=true&w=majority';

const connectionParams={
    useUnifiedTopology: true 
}

function conectarDB(){
    mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}

module.exports = conectarDB