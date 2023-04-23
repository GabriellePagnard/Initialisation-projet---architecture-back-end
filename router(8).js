const { Router } = require("express");
const mainController = require("./controllers(6)/mainController");

const router = Router();

router.get("/", mainController.renderHomePage);

router.get("/levels", levelController.renderLevelsPage);

router.get("/user", userController.renderUserPage);

module.exports = router;
