const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  author: {
    type: String,
    required: true, 
  },
  ISBN: {
    type: String,
    required: true,
    unique: true,  
  },
  quantityAvailable: {
    type: Number,
    required: true,
    min: 0,         
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
