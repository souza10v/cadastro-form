const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const savingLogin = require('../middlewares/savingLogin')

router.post('/createuser', userController.createUser);
router.post('/login', userController.loginUser);

router.post('/saveuserinfo', savingLogin.saveUserInfo);

module.exports = router;