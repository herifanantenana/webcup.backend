const authHelper = require("./../helpers/authHelper");
const authService = require("./../services/authService");
const TokenHelper = require("./../helpers/authHelper");

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
          ...req.body,
          email: email,
          password: hashedPassword,
        };

        //instanciation de la classe tokenHelper
        const newToken = new TokenHelper(process.env.SECRET_KEY);

        const newUser = await authService.signupService(userData);

        if (newUser) {
          //récupération de l' identifiant du nouvel user et attribution du jeton
          const userID = { _id: clientAdded._id };
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
}

module.exports = new authController();
