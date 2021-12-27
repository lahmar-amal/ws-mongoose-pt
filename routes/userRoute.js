const express = require("express");
const router = express.Router();
const User = require("../model/user");
// test
router.get("/", (req, res) => {
    res.send("test is success");
});

// add user
router.post("/add", async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newUser = new User({ name, email, phone });
        await newUser.save();
        res.status(200).send({ msg: "user added successfully", newUser });
    } catch (err) {
        res.status(400).send(err);
    }
});
router.get("/allusers", async (req, res) => {
    try {
        const users = await User.find();
        res.send({ msg: "all users", users });
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
