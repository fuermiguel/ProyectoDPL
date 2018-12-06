const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nombre es obligatorio']
    },
    image: {
        type: String
    },
    label: {
        type: String
    },
    price: {
        type: String
    },
    featured: {
        type: String
    },
    description: {
        type: String
    }
});

const Promotion = mongoose.model('promotion', PromotionSchema);

module.exports = { Promotion, PromotionSchema };