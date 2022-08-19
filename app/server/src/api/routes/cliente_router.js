const exporess = require('express');

const clientValidation = require('../middlewares/clienteValidations');
const clientcontroller = require ('../controllers/clienteController');


const router = exporess.Router();

router.get("/", clientcontroller.findAll);
router.get("/:id", clientcontroller.getById);
router.post("/", [clientValidation.nameValidation, clientcontroller.create]);
router.put("/:id", [clientValidation.nameValidation, clientcontroller.update]);
router.delete("/:id", clientcontroller.deletebyId);

module.exports = router;