class authController {
  async createUser(req, res) {
    try {
      console.log(req.body);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new authController();
