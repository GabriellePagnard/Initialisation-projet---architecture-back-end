const { Level } = require("../models");

const levelController = {
  async renderLevelsPage(req, res) {
    const levels = await Level.findAll();

    res.render("levels", { levels });
  }
};

module.exports = levelController;
