const express = require('express');
const router = express.Router();
const controller =require('./controller');

router.get('/getusers', controller.getUser);
router.post('/createuser', controller.addUser);
router.put('/updateuser', controller.updateUser);
router.delete('/deleteuser', controller.deleteUser);

module.exports = router;