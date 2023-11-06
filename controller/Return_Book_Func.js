
const Book_models = require("../model/Post_Books_Model");
const User_info = require("../model/User_Register_Model");
const Borrow_schemma = require("../model/BorrowSchemma")
const Return_Book_Func = async(req,res)=>{
    const bookId = req.params.bookId;
    const userId = req.params.userId;
    try {
        const Book = await Book_models.findById(bookId);
        if (!Book) {
            return res.status(404).json({ msg: 'Book not found' });
          }
          const user = await User_info.findById(userId);
          
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      const borrowedBook = await Borrow_schemma.Borrow.findOne({ book: bookId, user: userId });
      if (!borrowedBook) {
        return res.status(400).json({ msg: 'User has not borrowed this book' });
      }
      Book.quantityAvailable += 1;
      await Book.save();
      res.status(200).json({ msg: 'Book returned successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
      
    }
}

module.exports = Return_Book_Func