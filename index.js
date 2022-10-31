const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const routes = require('./src/routes/product.route');
const mongoConnect = require('./src/database/MongoDB/mongo');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./src/docs/swagger.json');

const app = express();

app.use(express.json());
app.use(cors());

config();
mongoConnect();

app.use('/products', routes);
app.use('/api/docs', swaggerUi.serve);
app.use('/api/docs', swaggerUi.setup(swaggerDoc));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
