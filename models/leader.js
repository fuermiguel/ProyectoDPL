const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nombre es obligatorio']
    },
    image: {
        type: String
    },
    designation: {
        type: String,
        required: [true, 'nombre es obligatorio']
    },
    abbr: {
        type: String
    },
    featured: {
        type: String
    },
    description: {
        type: String
    }

});

const Leader = mongoose.model('leader', LeaderSchema);

module.exports = { Leader, LeaderSchema };