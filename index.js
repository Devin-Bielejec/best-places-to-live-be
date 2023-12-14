require("dotenv").config();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const server = require("./server");
// const credentials = require("./config/ssl");
const https = require("https");
const port = process.env.PORT || 443;

//Connect to MongoDB
mongoose
  .connect(keys.mongodb.dbURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB successfully connected.");
  })
  .catch((e) => console.error(`Could not connect: ${e.message}`));

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
