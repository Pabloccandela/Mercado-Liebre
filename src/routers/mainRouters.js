const {Router} = require('express');
const router = Router();

// CONTROLADORES   
const mainController = require('../controllers/main-controller');

router.get("/",mainController.home)
router.get("/login",mainController.login)
router.get("/register",mainController.register)
router.get("/mantenimiento",mainController.mantenimiento)

module.exports = router;