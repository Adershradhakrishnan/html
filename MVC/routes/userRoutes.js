const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const checkLogin = require('../utils/checkLogin').checkLogin;

router.post('/user',userController.createUser);
router.get('/user',checkLogin,userController.geUserData);
// router.put('/user',checkLogin,userController.updateUser);
// router.delete('/user',checkLogin,userController.deleteUser);

module.exports = router;