const userModel = require("./../models/userModel");
const bcrypt = require("bcrypt");

class authHelper {
  async hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new authHelper();
