const authHelper = require("./../helpers/authHelper");
const authService = require("./../services/authService");
const TokenHelper = require("./../helpers/tokenHelper");

class authController {
  async createUser(req, res) {
    try {
      const { email, password } = req.body;

      //vérification de l' existence de l' utilisateur
      const emailExist = await authService.verifyEmailExistence(email);

      if (!emailExist) {
        const hashedPassword = await authHelper.hashPassword(password);

        const userData = {
          ...req.body,
          email: email,
          password: hashedPassword,
        };

        const newUser = await authService.signupService(userData);

        //instanciation de la classe tokenHelper
        const newToken = new TokenHelper(process.env.SECRET_KEY);

        if (newUser) {
          //récupération de l' identifiant du nouvel user et attribution du jeton
          const userID = { _id: newUser._id };
          const token = newToken.generateToken(userID);
          console.log("token d' accés: ", token);

          res.status(200).json({ newUser: newUser, token: token });
        } else {
          res
            .status(400)
            .json({ message: "erreur lors de l' ajout de l' utilisateur" });
        }
      } else {
        res.status(400).json({ message: "utilisateur a déja éjé inscris" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "createUser" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const userValid = await authService.loginService(email, password);

      //instanciation de la classe tokenHelper
      const newToken = new TokenHelper(process.env.SECRET_KEY);

      if (userValid) {
        const userID = { _id: userValid._id };

        //génération du token
        const token = newToken.generateToken(userID);

        res.status(200).json({
          message: "utilisateur validé avec succés",
          userValid: userValid,
          token: token,
        });
      } else {
        res
          .status(400)
          .json({ message: "erreur lors de la connexion de l'utilisateur" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "login" });
    }
  }
}

module.exports = new authController();
