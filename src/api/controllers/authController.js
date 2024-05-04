class authController {
  async createUser(req, res) {
    try {
        
      res.json(req.body);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new authController();
