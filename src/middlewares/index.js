const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('../api/v1/routes');
const errorCatcher = require('./error-cather');

function applyMiddleware(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());

  //Routes
  app.use(apiRoutes);

  app.use(errorCatcher);
}

module.exports = applyMiddleware;
