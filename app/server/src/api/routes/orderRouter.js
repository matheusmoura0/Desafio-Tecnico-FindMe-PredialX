const exporess = require('express');

const serviceOrderController = require ('../controllers/ordersController');


const router = exporess.Router();

router.get("/", serviceOrderController.getAll);
router.post("/", serviceOrderController.create);
router.get("/:id", serviceOrderController.getById);
router.put("/:id", serviceOrderController.update);
router.delete("/:id", serviceOrderController.deletebyId);

module.exports = router;
