const { Router } = require("express");
const TracasController = require("../controllers/tracasController");

const router = Router();

router.post("/create", TracasController.createNewTracas);

router.get("/get", TracasController.getAllTracas);

router.get("/get/category/:category", TracasController.getAllTracasCategory);

router.get("/get/:name", TracasController.getOneTracas);


module.exports = router;