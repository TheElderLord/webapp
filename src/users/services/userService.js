// services/userService.js
const sequelize = require('../../config/db');
const { QueryTypes } = require('sequelize');

async function updateBalance(userId, amount) {
  // Атомарное обновление с условием, чтобы баланс не стал отрицательным
  const [result] = await sequelize.query(`
    UPDATE "Users"
    SET balance = balance + :amount
    WHERE id = :userId
      AND (balance + :amount) >= 0
    RETURNING balance;
  `, {
    type: QueryTypes.SELECT,
    replacements: { userId, amount },
  });

  if (!result) {
    throw new Error('Insufficient funds or user not found');
  }
  return result.balance;
}

module.exports = { updateBalance };
