const Book_models = require("../model/Post_Books_Model");

const GET_Books = async (req, res) => {
  try {
    const Find__Books = await Book_models.find({});

    res.status(200).send(Find__Books);
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error,
    });
  }
};

module.exports = GET_Books;
