const userService = require("../application/userService");

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: "Error creating user", error: err });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json({ message: "User not found", error: err });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: "Error fetching users", error: err });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: "Error updating user", error: err });
    }
  }

  async deleteUser(req, res) {
    try {
      await userService.deleteUser(req.params.id);
      res.status(204).json();
    } catch (err) {
      res.status(500).json({ message: "Error deleting user", error: err });
    }
  }
}

module.exports = new UserController();
