// app.js
const express = require('express');
const dotenv = require('dotenv');

const app = express();
const userRoutes = require('./users/routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

app.use(express.json());
app.use('/api', userRoutes);

// Глобальный обработчик ошибок
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
