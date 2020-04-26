const startApp = require('./start-app');

startApp().catch(err => {
  console.error(err);
  process.kill(1);
});
