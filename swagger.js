const express = require('express');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')

const app = express();
const swaggerDocument = YAML.load('benerin_mock-api.yml');
const port = 3000;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors())

app.listen(port, () => console.log(`Example app listening on port ${port}!`));