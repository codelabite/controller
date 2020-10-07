const express = require("express");
const PORT = 3330;
const server = express();

const lekan = require("./route");

server.use("/API/V1/CodeLab", lekan);

server.listen(PORT, () => {
  console.log("My Server is up");
});
