const express = require("express")
const Login = require("../MiddleWares/RequireLogin")
const UserModel = require("../Model/UserModel")
const bcrypt = require("bcrypt")


const userRouter = express.Router()

//Update User
userRouter.put("/update/:id", Login,async(req, res)=>{
    try {
        const user = await UserModel.findById(req.params.id)
        if(req.user._id.toString() === user._id.toString() || user.isAdmin){
            if(req.body.password){
                try {
                    const salt = await bcrypt.genSalt(13)
                    req.body.password = await bcrypt.hash(req.body.password, salt)

                } catch (error) {
                    console.log(error)
                    return res.status(500).json(error)
                }
            }
            const saveUser = await UserModel.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            if(saveUser){
                return res.status(200).json({message:"Account Updated Successfully"})
            }
            return res.status(422).json({error:"Error in updating account"})
        }
        return res.status(422).json({error:"You are not authorized to update this account"})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

//delete user
userRouter.delete("/delete/:id", Login,async(req, res)=>{
    try {
        const user = await UserModel.findById(req.params.id)
        if(req.user._id.toString() === user._id.toString()){
            const deleteUser = user.deleteOne()
            return res.status(200).json({message:"Account Deleted Successfully"})
        } 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

//get user
userRouter.get("/user/:id",async(req, res)=>{
    try {
        const user = await UserModel.findById(req.params.id)
        const {password, verify,updatedAt, isAdmin, ...others} = user._doc
        return res.status(200).json(others)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

//follow user
userRouter.put("/follow/:id", Login,async(req, res)=>{
    try {
        if(req.user._id.toString() !== req.params.toString()){
            const user = await UserModel.findByIdAndUpdate(req.params.id)
            if(!user.followers.includes(req.user._id)){
                const follow = await UserModel.findByIdAndUpdate(req.params.id, {
                    $push:{followers:req.user._id}
                })
                if(follow){
                    const follower = await UserModel.findByIdAndUpdate(req.user._id, {
                        $push:{followering:req.params.id}
                    })
                    if(follower){
                        res.status(200).json({message:"You have successfully followed this user"})
                    }
                }
            }
            return res.status(422).json({error:"You already followed this user"})
        }
        return res.status(422).json({error:"You cannot follow yourself"}) 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error) 
    }
})

//unfollow user
userRouter.put("/unfollow/:id", Login,async(req, res)=>{
    try {
        if(req.user._id.toString() !== req.params.toString()){
            const user = await UserModel.findByIdAndUpdate(req.params.id)
            if(user.followers.includes(req.user._id)){
                const follow = await UserModel.findByIdAndUpdate(req.params.id, {
                    $pull:{followers:req.user._id}
                })
                if(follow){
                    const follower = await UserModel.findByIdAndUpdate(req.user._id, {
                        $pull:{followering:req.params.id}
                    })
                    if(follower){
                        res.status(200).json({message:"You have successfully unfollowed this user"})
                    }
                }
            }
            return res.status(422).json({message:"You already unfollowed this user"})
        }
        return res.status(422).json({error:"You cannot unfollow yourself"}) 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error) 
    }
})

module.exports = userRouter