const mongoose = require('mongoose');
const {
  MONGO_CONNECTION_URL
} = require('../config');

async function connection() {
  return mongoose.connect(MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(() => console.log('✅  Mongo DB connected successful.'))
    .catch(err => console.error(err.message || err));
}

module.exports = connection;
