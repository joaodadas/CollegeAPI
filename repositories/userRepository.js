class UserRepository {
  constructor(userModel) {
    this.userModel = userModel; // Dependency Injection
  }

  async create(userData) {
    try {
      const user = new this.userModel(userData);
      return await user.save();
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }

  async getById(id) {
    try {
      return await this.userModel.findById(id);
    } catch (error) {
      throw new Error("Error fetching user by ID: " + error.message);
    }
  }

  async getAll() {
    try {
      return await this.userModel.find();
    } catch (error) {
      throw new Error("Error fetching users: " + error.message);
    }
  }

  async update(id, updateData) {
    try {
      return await this.userModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });
    } catch (error) {
      throw new Error("Error updating user: " + error.message);
    }
  }

  async delete(id) {
    try {
      return await this.userModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Error deleting user: " + error.message);
    }
  }
}

module.exports = (userModel) => new UserRepository(userModel);
