const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const UserModel = require("../Model/UserModel")


dotenv.config()


const Login = async(req, res, next) =>{
    try {
        const {authorization} = req.headers
        if(!authorization){
            return res.status(401).json({error:"You are not authorized, You must be Logged In"}) 
        }
       const token = authorization.replace("Bearer " , "")
       jwt.verify(token, process.env.JWT_HEADER, (err, payload)=>{
           if(err){
            return res.status(401).json({error:"You are not authorized, You must be Logged In"})
           }
           const {_id} = payload
           UserModel.findById(_id).then(savedUser=>{
            req.user = savedUser
             next()

        })
       })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

module.exports = Login