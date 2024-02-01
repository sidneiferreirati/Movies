require("express-async-errors");

const express = require("express");
const routes = require("./routes");
const AppError = require("./utils/AppError");

const app = express();
app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.status).json({
      status: "error",
      message: error.message,
    });
  }
  console.log(error);
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const port = 3334;
app.listen(port, () => {
  console.log(`Running server is port ${port}`);
});
