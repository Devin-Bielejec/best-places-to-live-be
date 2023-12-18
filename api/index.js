const express = require("express");
//Security Imports
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const session = require("express-session");
//Auth not set up how I would like it done but I'm going to leave it for now so that we don't get any bugs in testing.
//Plan is to have this better organized to my liking by v5
const cookie = require("cookie-session");
const cookieParser = require("cookie-parser");
const users = require("../routes/users");
const auth = require("../routes/auth");
const city = require("../routes/city");
const profile = require("../routes/profile");
require("dotenv").config();
console.log(process.env.mongodb_uri);
const mongoose = require("mongoose");
const port = process.env.PORT || 443;

//Still not sure what keys are doing
const keys = require("../config/keys.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(express.static(__dirname, { dotfiles: "allow" }));
server.use(cookieParser());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(
  session({ secret: "thisismysecret", resave: true, saveUninitialized: true })
);
server.use(passport.initialize());
server.use(passport.session());

const passportConfig = require("../middleware/passportConfig")(passport);

//Routes
server.use("/city", city);
server.use("/users", users);
server.use("/auth", auth);
server.use("/profile", profile);
//Informs devs that this is working
server.get("/", (req, res) => {
  res.status(200).send("Let's Move Homie is a terrible name");
});

mongoose.connect(process.env.mongodb_uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
});
server.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = server;
