const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const users = require('./action/users/model');
const roles = require('./action/Roles/model');
const db = require("./database/connect");
const { request } = require("express");
app.use(express.json());

app.post("/user", async(req, res) => {
  
  try {
    const user = await users.create({
      "name": req.body.name,
      "email": req.body.email,
      "password":req.body.password
    });
    return res.send(user);
  } catch(err) {
     throw new Error(err+" server error");
  }
});
app.post("/roles", async(req, res) => {
  
  try {
    const Roles = await roles.create({
      "name": req.body.name,
    });
    return res.send(Roles);
  } catch(err) {
     throw new Error(err+" server error");
  }
});



app.listen('3000',()=>{
  console.log("connnecteddddd");
})

db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
