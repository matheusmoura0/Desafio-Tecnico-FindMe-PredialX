const exporess = require('express');

const employeeValidation = require('../middlewares/employeeValidations');
const employeeController = require ('../controllers/employeeController');


const router = exporess.Router();

router.post("/", [
    employeeValidation.nameValidation,
    employeeValidation.emailValidation,
    employeeValidation.passwordValidation,
    employeeController.create]);
router.get("/", employeeController.getAll);
router.get("/:id", employeeController.getById);
router.put("/:id", employeeController.update);

module.exports = router;