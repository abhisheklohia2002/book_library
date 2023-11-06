const User_info = require("../model/User_Register_Model");

const User_Register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (username !== "" || email !== ""  || ""!== password) {
      const check_user = await User_info.findOne({ email });
      if (check_user) {
        res.status(409).json({ msg: "User Already Present" });
      } else {
        const User_Check = new User_info({ username, email, password });
        await User_Check.save();
        res.status(201).json({ msg: "Registered Successfully", info: User_Check });
      }
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

module.exports = User_Register;
