const userModel = require("./../models/userModel");

class authService {
  async signupService(userData) {
    try {
      const newUser = new userModel({ ...userData });
      return newUser.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async loginService(userData) {
    try {
      const newUser = new userModel({ ...userData });
      return newUser.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async verifyEmailExistence(email) {
    try {
      const emailExist = await userModel.findOne({ email: email });
      return emailExist;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new authService();
