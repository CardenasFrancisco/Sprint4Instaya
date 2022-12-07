const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express"),
  swaggerDoc = require("../swagger.json");

// Importing routes
const indexRouter = require("./routes/index");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const sendMailRouter = require("./routes/sendMail");

const app = express();

// Templates setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware setup
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Add routes
app.use("/", indexRouter);
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/mail", sendMailRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Database connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Conectado a Mongo"))
  .catch((error) => console.log(error));

// Error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 3000, () =>
  console.log(
    "Server runing on: " +
      process.env.HOST_URL +
      "\nUse 'host/api-doc' to see API documentation"
  )
);

console.log();

module.exports = app;
