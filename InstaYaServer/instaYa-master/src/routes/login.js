const express = require("express");
const jwt = require("jsonwebtoken");
const userSchema = require("../models/user");
const { checkPassword } = require("../controllers/pwdController");
const router = express.Router();

// Route to login user
router.post("/", async (req, res) => {
  try {
    const { user, password } = req.body;
    const actualUser = await userSchema.findOne({ user });
    if (await checkPassword(actualUser.password, password)) {
      const token = generateAccesToken(user);
      res.status(200).json({ message: "success", token, actualUser });
    } else {
      res.status(500).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

function generateAccesToken(email) {
  return jwt.sign(email, process.env.TOKEN);
}

module.exports = router;
