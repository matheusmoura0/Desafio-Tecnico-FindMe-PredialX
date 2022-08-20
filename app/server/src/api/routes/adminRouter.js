const express = require('express');

const adminValidations = require('../middlewares/adminValidations');
const adminController = require ('../controllers/adminController');


const router = express.Router();

router.post("/", [adminValidations.adminValidation, adminController.login]);


module.exports = router;