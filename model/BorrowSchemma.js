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

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
});

const BorrowSchema = new mongoose.Schema({
  borrowbook: {
    type: userSchema,  
  },
  namebook:{
    bookSchema
  }
});


const Borrow = mongoose.model('Borrow', BorrowSchema);

module.exports = {
  
  Borrow,
};
