var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.getAllUsers);
router.post('/', usersController.addUser);
router.delete('/:id', usersController.deleteUser);
router.put('/:id', usersController.updateUser);
module.exports = router;
