const req = require("express/lib/request");
const res = require("express/lib/response");
const Planet = require("../models/Planet");

exports.crearPlanet = (req, res) => {
    try {
        let planet;
        //creamos nuestro planeta
        planet = new Planet(req.body);
        //almacenar un planeta
        planet.save();
        res.send(planet);
    } catch (error) {
        
    }
}

exports.getPlanets = async(req, res) => {
    try {
        const planets = await Planet.find();
        res.json(planets);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.updateProduct = async(req, res) => {
    try {
        const { name, cathegory, radius } = req.body;
        let planet = await Planet.findById(req.params.id);
        if(!planet){
            res.status(404).json({ msg: 'No existe este planeta'});
        }
        planet.name = name;
        planet.cathegory = cathegory;
        planet.radius = radius;
        planet = await Planet.findOneAndUpdate({
           _id: req.params.id 
        }, planet, {
            new: true
        })
        res.json(planet)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getProduct = async(req, res) => {
    try {
        let planet = await Planet.findById(req.params.id);
        if(!planet){
            res.status(404).json({ msg: 'No existe este planeta'})
        }
        res.json(planet);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteProduct = async(req, res) => {
    try {
        let planet = await Planet.findById(req.params.id);
        if(!planet){
            res.status(404).json({ msg: 'No existe este planeta'})
        }
        await Planet.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'Producto eliminado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

