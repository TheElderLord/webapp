// migrations/202304070001-create-user.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        balance: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 10000,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      });
      
      // Добавляем стартовую запись с балансом 10000
      await queryInterface.bulkInsert('Users', [{
        balance: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
    },
  };
  