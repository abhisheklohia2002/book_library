const User_info = require("../model/User_Register_Model");

const User_login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email && password) {
      const user = await User_info.findOne({ email });

      if (!user) {
        res.status(401).json({ msg: "User not found" });
      } else if (user.password === password) {
      
        res.status(200).json({ msg: "Login successful", user });
      } else {
       
        res.status(401).json({ msg: "Incorrect password" });
      }
    } else {
      res.status(400).json({ msg: "Missing email or password" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

module.exports = User_login;
