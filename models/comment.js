const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = new Schema({
    rating: Number,
    comment: String,
    author: String,
    date: Date
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = { Comment, CommentSchema };