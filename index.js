let express = require("express");

// app_setup
let app = express();

// server_setup
let server = app.listen(4000, () => {
  console.log("server is running on localhost:4000");
});

// route_setup
app.get("/", (res, req) => {
  req.sendFile(__dirname + "/public/index.html");
});
