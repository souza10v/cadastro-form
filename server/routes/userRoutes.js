const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const savingLogin = require('../middlewares/savingLogin');
const getUserIP = require('../middlewares/getUserIp')

router.post('/createuser', userController.createUser);
router.post('/login', userController.loginUser);

router.post('/saveuserinfo', savingLogin.saveUserInfo);

router.get('/getuserip', getUserIP.getUserIP)

module.exports = router;