const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/user',userController.createUser);
// router.get('/getData',userController.geuserdata);

module.exports = router;