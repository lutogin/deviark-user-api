const UserDao = require('../users/dao/users.dao');
const bcryptjs = require('bcryptjs');

class UsersService {
  constructor() {
    this.dao = new UserDao();
  }

  async hashPwd(plainPwd) {
    return bcryptjs.hash(plainPwd, 10);
  }

  async createUser(userData) {
    const { password } = userData;
    const hashPassword = await this.hashPwd(password);
    const {
      _id,
      name,
      email,
      created_at,
    } = await this.dao.create({ ...userData, password: hashPassword });

    return { _id, name, email, created_at };
  }

  async findUser(id) {
    return this.dao.findById(id, { password: 0 });
  }

  async findUsers(filter) {
    return this.dao.find(filter, { password: 0 });
  }

  async updateUser(filter, userData) {
    return this.dao.update(filter, { ...userData, updated_at: new Date() });
  }

  async deleteUser(filter) {
    return this.dao.deleteOne(filter);
  }

  async deleteUsers(filter) {
    return this.dao.deleteMany(filter);
  }
}

module.exports = UsersService;
