const User = require("../models/userModel");

class UserRepository {
  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getById(id) {
    return await User.findById(id);
  }

  async getAll() {
    return await User.find();
  }

  async update(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
