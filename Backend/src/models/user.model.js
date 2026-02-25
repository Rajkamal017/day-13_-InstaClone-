const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: [true, "username already exist"],
        require: true
    },
    email : {
        type: String,
        unique: [true, "Email already exist"],
        require: [true, "Email is required"]
    },
    password : {
        type: String,
        require: [true, "Password is required"],
        select: false
    },
    bio: String,
    profileImage : {
        type: String,
        default :" https://ik.imagekit.io/mjzo2x4am/Default_profile_image_.png"
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
