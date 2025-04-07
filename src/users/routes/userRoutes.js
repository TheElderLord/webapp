// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { updateUserBalance } = require('../controllers/userController');
const { updateBalanceValidator } = require('../validators/userValidator');

router.post('/update-balance', updateBalanceValidator, updateUserBalance);

module.exports = router;
