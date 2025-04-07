// migrate.js
const { Umzug, SequelizeStorage } = require('umzug');
const sequelize = require('./config/db');

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  storage: new SequelizeStorage({ sequelize }),
  context: sequelize.getQueryInterface(),
  logger: console,
});

async function runMigrations() {
  await umzug.up();
  console.log('Миграции выполнены.');
}

runMigrations().catch(err => {
  console.error('Ошибка миграции', err);
});
