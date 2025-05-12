var express = require('express');
var router = express.Router();
const loansController = require('../controllers/loansController');

/* GET users listing. */
router.get('/', loansController.getAllLoansFull);
router.post('/', loansController.addLoan);
router.delete('/:id', loansController.deleteLoan);
router.put('/:id', loansController.updateLoan);

module.exports = router;
