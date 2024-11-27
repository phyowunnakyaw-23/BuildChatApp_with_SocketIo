let express = require("express");

// app_setup
let app = express();

// server_setup
let server = app.listen(4000, () => {
  console.log("server is running on localhost:4000");
});
