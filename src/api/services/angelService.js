const angel = require("../models/angelModel");
const tracas = require("../models/tracasModel");
const mongoose = require("mongoose");
const TracasService = require("./tracasService");

class AngelService {
  constructor(modelAgenl, modelTracas) {
    this.Angel = modelAgenl;
    this.Tracas = modelTracas;
  }

  async createNewAngel(name, picture, description, ) {
    try {
      const newAngel = new this.Angel({
        name,
        picture,
        description,
      });
      return await newAngel.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getOneAngel(name) {
    try {
      return await this.Angel.findOne({ name: { $regex: name, $options: 'i' } });
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAllAngels() {
    try {
      return await this.Angel.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new AngelService(angel, tracas);