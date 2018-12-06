const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var { DishSchema } = require('./dish');
var { LeaderSchema } = require('./leader');
var { PromotionSchema } = require('./promotion');


const RestauranteSchema = new Schema({
    dishes: [DishSchema],
    leaders: [LeaderSchema],
    promotions: [PromotionSchema]
});

const Restaurante = mongoose.model('restaurante', RestauranteSchema);


module.exports = Restaurante;