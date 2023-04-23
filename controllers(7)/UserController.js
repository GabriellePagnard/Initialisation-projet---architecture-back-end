const { User } = require("../models");

const userController = {
  async renderUsersPage(req, res) {
    const user = await User.findAll();

    res.render("user", { User });
  }
};

module.exports = userController;

