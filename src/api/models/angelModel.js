const { Schema, model } = require('mongoose');

const angelSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
  },
  picture: {
    type: String,
    trim: true,
    unique: true,
  },
  desciption: {
    type: String,
    trim: true,
    unique: true,
  }
}, {
  timestamps: true,
});

const angelModel = model("Angel", angelSchema);

module.exports = angelModel;