const express = require("express");
require("dotenv").config();
require("./connection/db_connection");
const cors = require("cors");
const router = require("./routers/router");
const server = express();
const port = 5000;
server.use(cors());
server.use(express.json());
server.use(`/api`, router);
server.listen(port, () => {
  console.log(`server is running ${port} in this port`);
});
