const { Router } = require("express");
const AngelController = require("../controllers/angelController");
const upload = require("../middlewares/multerMiddleware");

const router = Router();

router.post("/create", upload.single("picture"), AngelController.createNewAngel);

router.get("/get", AngelController.getAllAngels);

router.get("/get/:name", AngelController.getOneAngel);

module.exports = router;