const Borrow_schemma = require("../model/BorrowSchemma")
const List_Borrow_Func = async(req,res)=>{
    const userId = req.params.userId;
    console.log(userId)
    try {
        const User = await Borrow_schemma.Borrow.findById(userId);
        if (!User) {
            return res.status(404).json({ msg: 'User not found' });
          }
          const borrowedBooks = await Borrow_schemma.Borrow.find({ user: userId }).exec();
          const booksInfo = [];
          for (const borrowedBook of borrowedBooks) {
            const book = await Borrow_schemma.Book_Borrow.findById(borrowedBook.book);
      
            if (book) {
              booksInfo.push({
                title: book.title,
                author: book.author,
                ISBN: book.ISBN,
              });
            }
          }
      
          res.status(200).json({ books: booksInfo });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }

}
module.exports = List_Borrow_Func