const express = require('express');
const router = express.Router();

const formAPTController = require('../controllers/formAPTController');

router.post('/createformapt', formAPTController.creatAPT);

module.exports = router;