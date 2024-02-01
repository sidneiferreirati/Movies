const path = require("path");
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db"), // Caminho aonde esta instalado o BD
    },

    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },
};
