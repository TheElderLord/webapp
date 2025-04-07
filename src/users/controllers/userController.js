// controllers/userController.js
const { updateBalance } = require('../services/userService');

async function updateUserBalance(req, res, next) {
  const { userId, amount } = req.body;
  try {
    const newBalance = await updateBalance(userId, amount);
    res.json({ balance: newBalance });
  } catch (error) {
    next(error);
  }
}

module.exports = { updateUserBalance };
