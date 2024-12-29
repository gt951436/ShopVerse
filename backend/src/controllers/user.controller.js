const UserModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");

const UserController = {
  createAccount: async function (req, res) {
    try {
      const userData = req.body;
      const newUser = new UserModel(userData);
      await newUser.save();
      return res.json({
        successs: true,
        data: newUser,
        message: "New User created",
      });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  },
  signIn: async function (req, res) {
    try {
      const { email, password } = req.body;

      const existingUser = await UserModel.findOne({ email: email });

      if (!existingUser) {
        return res.json({ success: false, message: "User not found!" });
      }
      const passwordsMatch = bcrypt.compareSync(
        password,
        existingUser.password
      );
      if (!passwordsMatch) {
        return res.json({ success: false, message: "Incorrect password!" });
      }
      return res.json({
        success: true,
        data: existingUser,
        message: "Signed in succesfully!",
      });
    } catch (err) {
      return res.json({ success: false, message: err });
    }
  },
};
module.exports = UserController;
