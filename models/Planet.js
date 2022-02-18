const mongoose = require('mongoose');
const PlanetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cathegory: {
        type: String,
        required: true
    },
    radius: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Planet', PlanetSchema);