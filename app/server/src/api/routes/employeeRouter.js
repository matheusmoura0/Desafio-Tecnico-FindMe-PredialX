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

module.exports = router;