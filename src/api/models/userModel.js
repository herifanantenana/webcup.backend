const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      default: "user",
    },
    email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, //vérification regex
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  //sauvegarder les doonnées
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

//Exportation du model
module.exports = userModel;
