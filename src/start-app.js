const http = require('http');
const app = require('./app');
const connection = require('./db/connection');
const { APP_PORT } = require('./config');

async function startApp() {
  const server = http.createServer(app);
  const db = await connection();

  server.listen(APP_PORT);
  console.info(`✅  App listening on port ${APP_PORT}`);

  server.on('close', async () => {
    db.close();
  });

  return server;
}

module.exports = startApp;
