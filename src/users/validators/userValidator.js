// validators/userValidator.js
const { body, validationResult } = require('express-validator');

const updateBalanceValidator = [
  body('userId')
    .isInt({ gt: 0 })
    .withMessage('userId должен быть положительным целым числом'),
  body('amount')
    .isInt()
    .withMessage('amount должен быть целым числом'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { updateBalanceValidator };
