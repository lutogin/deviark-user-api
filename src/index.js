const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToMongo = require('./db/connection');
const apiRoutes = require('./api/v1/routes');
const errorCatcher = require('./middlwares/error-cather');
const { APP_PORT } = require('./configs');

connectToMongo();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes);
app.use(errorCatcher);

app.listen(APP_PORT);
