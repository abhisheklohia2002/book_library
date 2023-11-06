
const Book_models = require("../model/Post_Books_Model");
const User_info = require("../model/User_Register_Model");
const BorrowSchemma = require("../model/BorrowSchemma")
const Borrow_Book_Function = async(req,res)=>{
    const bookId = req.params.bookId;
  const userId = req.params.userId;
  console.log(bookId,userId)
    try {
       const book = await Book_models.findById(bookId) ;
       if (!book) {
        return res.status(404).json({ msg: 'Book not found' });
      }
      if (book.quantityAvailable === 0) {
        return res.status(400).json({ msg: 'No available copies to borrow' });
      }

      const user = await User_info.findById(userId)
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

const username = user.username
const email = user.email
      book.quantityAvailable -= 1;
      const title = book.title;
      const author = book.author;
       const ISBN = book.ISBN;
       const quantityAvailable = book.quantityAvailable
      await book.save();
      const borrowedBook = new BorrowSchemma.Borrow({
        borrowbook:{
            username,
email
        },
        namebook:{
title,author,ISBN,quantityAvailable
        }
      });
  
      await borrowedBook.save();
      res.status(200).json({ msg: 'Book borrowed successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
      
    }
}

module.exports = Borrow_Book_Function;
