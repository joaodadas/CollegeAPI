const userRepository = require("../repositories/userRepository");

class UserService {
  async createUser(userData) {
    return await userRepository.create(userData);
  }

  async getUserById(id) {
    return await userRepository.getById(id);
  }

  async getAllUsers() {
    return await userRepository.getAll();
  }

  async updateUser(id, updateData) {
    return await userRepository.update(id, updateData);
  }

  async deleteUser(id) {
    return await userRepository.delete(id);
  }
}

module.exports = new UserService();
