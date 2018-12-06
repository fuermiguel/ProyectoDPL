const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var { CommentSchema } = require('./comment');

const DishSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nombre es obligatorio']
    },
    image: {
        type: String
    },
    category: {
        type: String,
        required: [true, 'Categoría es obligatoria']
    },
    label: {
        type: String,
    },
    price: {
        type: String,
        required: [true, 'Precio es obligatorio']
    },
    featured: {
        type: Boolean
    },
    description: {
        type: String
    },
    comments: [CommentSchema]

});

const Dish = mongoose.model('dish', DishSchema);

module.exports = { Dish, DishSchema };