const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:String,
        email: {type:String,unique:true,required:true},
        profilePic: String
    },
    {timestamps:true}
)
const UserModel = mongoose.model("User", userSchema)
module.exports = UserModel
