const userModel = require("./../models/userModel");
const authHelper = require("./../helpers/authHelper");

class authService {
  async signupService(userData) {
    try {
      const newUser = new userModel({ ...userData });
      return newUser.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  async loginService(email, password) {
    try {
      const user = await userModel.findOne({ email: email });
      const passwordValid = await authHelper.comparePassword(
        password,
        user.password
      );

      if (user && passwordValid) {
        return user;
      }
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
