const userController = require('./users.connector');
const RouteCreator = require('../../../lib/routes/router-creator');

const Router = new RouteCreator(userController);

const router = Router.addRoutes([
  Router.get('/:id', userController.findOne.name),
  Router.get('/', userController.find.name),
  Router.post('/', userController.create.name),
  Router.put('/:id', userController.update.name),
  Router.delete('/:id', userController.deleteOne.name),
  Router.delete('/', userController.deleteMany.name),
]);

module.exports = router;
