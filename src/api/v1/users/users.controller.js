const UserService = require('./users.service');

// const service = new UserService();

class UsersController {
  constructor() {
    this.service = new UserService();
  }

  async findOne(req, res) {
    const { id } = req.data;

    return res.send(await this.service.findUser(id));
  }

  async find(req, res) {
    return res.send(await this.service.findUsers(req.data));
  }

  async create(req, res) {
    return res.send(await this.service.createUser(req.data));
  }

  async update(req, res) {
    const { id, ...user } = req.data;

    if (user.password) {
      user.password = await this.service.hashPwd(user.password);
    }

    return res.send(await this.service.updateUser({ _id: id }, user));
  }

  async deleteOne(req, res) {
    const { id } = req.data;

    return res.send(await this.service.deleteUser({ _id: id }));
  }

  async deleteMany(req, res) {
    const { id } = req.data;

    return res.send(await this.service.deleteUsers({ _id: id }));
  }
}

module.exports = UsersController;
