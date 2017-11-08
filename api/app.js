const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

const mongoose = require("mongoose")
const jwt = require("jsonwebtoken") // used to create, sign, and verify tokens

const config = require("./config") // get our config file

mongoose.connect(config.database) // connect to MongoDB

const index = require("./routes/index")
const users = require("./routes/users")
const questions = require("./routes/questions")

const app = express()

app.set("appSecret", config.secret)
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", index)
app.use("/users", users)
app.use("/questions", questions)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app