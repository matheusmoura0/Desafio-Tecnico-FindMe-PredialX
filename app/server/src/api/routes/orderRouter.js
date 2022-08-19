const exporess = require('express');

const serviceOrderController = require ('../controllers/ordersController');


const router = exporess.Router();

router.get("/", serviceOrderController.getAll);
router.post("/", serviceOrderController.create);

module.exports = router;
