const exporess = require('express');

const clientcontroller = require ('../controllers/clienteController');


const router = exporess.Router();

router.get("/", clientcontroller.findAll);

module.exports = router;