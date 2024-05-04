const { Schema, model } = require("mongoose");

const tracasSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
  },
  categorie: {
    type: String,
    enum: ["course", "menage"],
    require: true
  },
  desciption: {
    type: String,
    trim: true,
    unique: true,
  },
}, {
  timestamps: true,
})

const tracasModel = model("Tracas", tracasSchema);

module.exports = tracasModel;