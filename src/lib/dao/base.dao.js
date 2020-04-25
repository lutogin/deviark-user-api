class BaseDao {
  constructor(model) {
    this.model = model;
  }

  async create(data, options = null) {
    return this.model.create(data, options);
  }

  async findById(id, options = null) {
    return this.model.findById(id, options);
  }

  async find(filter = {}, projection = null, options = null) {
    return this.model.find(filter, projection, options);
  }

  async update(filter, data, options = null) {
    return this.model.update(filter, data, options);
  }

  async deleteOne(filter, options = null) {
    return this.model.deleteOne(filter, options);
  }

  async deleteMany(filter, options = null) {
    return this.model.deleteMany(filter, options);
  }
}

module.exports = BaseDao;
