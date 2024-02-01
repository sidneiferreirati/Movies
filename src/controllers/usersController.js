const knex = require("../database/knex");
const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const userExistEmail = await knex("users").where({ email }).first();
    console.log(email);

    if (userExistEmail.email && userExistEmail === email) {
      throw new AppError("Email ja cadastrado");
    }
    const encryptedPassword = await hash(password, 8);

    const users = await knex("users").insert({
      name,
      password: encryptedPassword,
    });
    return res.status(201).json(users);
  }

  // async update(req, res) {
  //   const { name, email, password, oldPassword } = req.body;
  //   const { id } = req.params;

  //   const user = await knex("users").where({ id }).first();

  //   if (!email) {
  //     throw new AppError("");
  //   }
  // }
}

module.exports = UsersController;
