const BaseDao = require('../../../../lib/dao/base.dao');
const UserSchema = require('../model/user.schema');

class UsersDao extends BaseDao {
  constructor() {
    super(UserSchema);
  }
}

module.exports = UsersDao;
