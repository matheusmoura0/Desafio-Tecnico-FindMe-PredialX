const exporess = require('express');

const clientcontroller = require ('../controllers/clienteController');


const router = exporess.Router();

router.get("/", clientcontroller.findAll);
router.get("/:id", clientcontroller.getById);
router.post("/", clientcontroller.create);
router.put("/:id", clientcontroller.update);
router.delete("/:id", clientcontroller.deletebyId);

module.exports = router;