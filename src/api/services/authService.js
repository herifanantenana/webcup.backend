const userModel = require("./../models/userModel");

class authService {
  async signupService(userData) {
    try {
      const newUser = new userModel({ ...userData });
      return newUser ? newUser.save() : null;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new authService();
