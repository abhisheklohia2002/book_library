const Book_models = require("../model/Post_Books_Model");

const GET_Books_ID = async (req, res) => {
  const id = req.params.id;

  try {
    const BooK_Get_ID = await Book_models.findById(id);

    if (BooK_Get_ID) {
      res.status(200).json({
        BooK_Get_ID,
      });
    } else {
      res.status(404).json({
        msg: "Not Found",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

module.exports = GET_Books_ID;
