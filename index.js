const express = require("express");
const PORT = 2000;
const server = express();
const db = require("./models");

server.use(express.json());

server.listen(PORT, () => {
  // db.sequelize.sync({ alter: true });
  console.log(`Success running at PORT ${PORT}`);
});
