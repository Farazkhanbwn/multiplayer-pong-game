const express = require("express");
const path = require("path");

const api = express();
const PORT = 3000;

api.use(express.static(path.join(__dirname, "public")));

api.use("/", express.static("index.html"));

// api.listen(PORT, () => {
//   console.log("server is runnig on ", PORT);
// });

module.exports = api;
