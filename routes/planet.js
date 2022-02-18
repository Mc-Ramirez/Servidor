//Rutas para planeta
const express = require('express');
const router = express.Router();
const planetController = require('../Controllers/planetController');

//api/planetas
router.post('/', planetController.crearPlanet);
router.get('/', planetController.getPlanets);
router.put('/:id', planetController.updateProduct);
router.get('/:id', planetController.getProduct);
router.delete('/:id', planetController.deleteProduct);

module.exports = router;