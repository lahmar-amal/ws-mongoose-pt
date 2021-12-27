//1step
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: Number,
});

module.exports = User = model("User", userSchema);
