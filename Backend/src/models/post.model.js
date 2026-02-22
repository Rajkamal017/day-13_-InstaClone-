const mongoose = require("mongoose")

const postSchema =  new mongoose.Schema({
    caption : {
        type : String,
        default : "",
    },
    imgUrl :{
        type : String,
        required : [true, "imgUrl is required to create a post"]
    },
    user : {
        ref : "user",
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "User id is required to creating a post."]
    },
    likes : {
        type : Number,
        default : 0
    }
})

const postModel = mongoose.model("posts", postSchema)

module.exports = postModel