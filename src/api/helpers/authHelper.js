const userModel = require("./../models/userModel");
const bcrypt = require("bcrypt");

class authHelper {
  async hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (err) {
      throw new Error(err);
    }
  }

  async comparePassword(clientPassword, hashedPassword) {
    try {
      const passwordMatch = await bcrypt.compare(
        clientPassword,
        hashedPassword
      );
      return passwordMatch;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new authHelper();
