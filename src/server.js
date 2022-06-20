// install and import express
const express = require("express");
const path = require("path")
let app = express();
const router = express.Router();
var data = require("./assets/user.json")
app.use(express.json());

const fs = require('fs');

// Code here
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/users.html'));
});
router.get("/users", (req, res) => {
    res.sendFile(path.join(__dirname + "/assets/user.json"));
})
router.get("/users/:id", (req, res) => {
    const user = data.filter((e) => e.id == req.params.id);
    res.send(user);
})
router.post("/users", (req, res) => {
    data.push(req.body);
    Post = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname + "/assets/user.json"), Post);
    res.send(data);
})
app.use("/", router)
app.listen(8000, () => {
    console.log("Listening 8000")
})
// Note: Do not remove this export statement
module.exports = app;
