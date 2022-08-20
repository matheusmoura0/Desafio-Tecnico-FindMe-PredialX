const express = require('express');
 
const adminController = require ('../controllers/adminController');


const router = express.Router();

router.post("/", adminController.login);


module.exports = router;