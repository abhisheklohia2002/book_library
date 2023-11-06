const Book_models = require("../model/Post_Books_Model");

const Post_Books = async (req, res) => {
  const { title, author, ISBN, quantityAvailable } = req.body;

  try {
    if (title !== "" || ""!== author ||  ISBN !=="" || quantityAvailable !=="") {
      const Book_Check = new Book_models({
        title,
        author,
        ISBN,
        quantityAvailable,
      });

      const savedBook = await Book_Check.save();

      res.status(201).json({
        msg: "Stored Successfully",
        book: savedBook,
      });
    } else {
      res.status(400).json({
        msg: "Missing some fields",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

module.exports = Post_Books;
