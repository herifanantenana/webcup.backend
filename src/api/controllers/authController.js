const authHelper = require("./../helpers/authHelper");
const authService = require("./../services/authService");

class authController {
  async createUser(req, res) {
    try {
      const { email, password } = req.body;

      //vérification de l' existence de l' utilisateur
      const emailExist = await authService.verifyEmailExistence(email);
      //   if (!emailExist) return res.json("utilisateur n' existe pas");

      if (!emailExist) {
        const hashedPassword = await authHelper.hashPassword(password);

        const userData = {
          email: email,
          password: hashedPassword,
        };

        const newUser = await authService.signupService(userData);
        return res.status(200).json(newUser);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "createUser" });
    }
  }
}

module.exports = new authController();
