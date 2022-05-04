const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type: String,
        default:""
    },
    likes:{
        type: Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    }
})


const PostModel = mongoose.model("Post", userSchema)

module.exports = PostModel;