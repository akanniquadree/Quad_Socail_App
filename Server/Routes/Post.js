const express = require("express")
const Login = require("../MiddleWares/RequireLogin")
const UserModel = require("../Model/UserModel")
const bcrypt = require("bcrypt")
const PostModel = require("../Model/PostModel")



const postRouter = express.Router()

//create post
postRouter.post("/createpost", Login, async(req, res)=>{
    try {
        const post = new PostModel(req.body)
        const savedPost = post.save()
        if(savedPost){
            res.status(200).json({message:"Post is created successfully"})
        }
        return res.status(422).json({error:"Error in Uploading post"})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error) 
    }
})


//update post
postRouter.put("/update/:id", Login, async(req, res)=>{
    try {
        const post = await PostModel.findById(req.params.id)
        const user = await PostModel.findById(req.user._id)
        if(post.userId.toString() === req.user._id || user.isAdmin){
            const updatedPost = await post.updateOne({$set:req.body})
            if(updatedPost){
                return res.status(200).json({message: "Post successfully updated"})
            }
            return res.status(422).json({error:"Error in updating post"})
        }
        return res.status(401).json({message:"You not authorized to update this post"})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error) 
    }
})

//delete post
postRouter.delete("/delete/:id", Login, async(req, res)=>{
    try {
        const post = await PostModel.findById(req.params.id)
        const user = await PostModel.findById(req.user._id)
        if(post.userId.toString() === req.user._id || user.isAdmin){
            const updatedPost = await post.deleteOne()
            if(updatedPost){
                return res.status(200).json({message: "Post successfully deleted"})
            }
            return res.status(422).json({error:"Error in deleting post"})
        }
        return res.status(401).json({message:"You not authorized to delete this post"})
    } catch (error) {
        console.log(error)
        return res.status(500).json(error) 
    }
})

//like post
postRouter.put("/like/:id", Login, async(req, res)=>{
    try {
        const post = await PostModel.findById(req.params.id)
        if(!post.likes.includes(req.user._id)){
            const like = await post.updateOne({$push:{likes:req.user._id}})
            if(like){
                return res.status(200).json({message: "Post has been liked"}) 
            }
        }
        const like = await post.updateOne({$pull:{likes:req.user._id}})
            if(like){
                return res.status(200).json({message: "Post has been disliked"}) 
            }

    } catch (error) {
        console.log(error)
        return res.status(500).json(error) 
    }
})

//get a post
postRouter.get("/post/:id", async(req, res)=>{
    try {
        const post = await PostModel.findById(req.params.id)
        if(post){
            res.status(200).json(post)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)  
    }
})

//get timeline post
postRouter.get("/timeline",Login, async(req, res)=>{
    try {
        const user = await PostModel.findById(req.user._id)
        const userPost = await PostModel.findOne({userId:user._id})
        const friendPost = await Promise.all(
            user.followings.map(friendId=>{
               return PostModel.find({userId:friendId})
            })
        )
        res.status(200).json(userPost.concat(...friendPost))
    } catch (error) {
        console.log(error)
        return res.status(500).json(error) 
    }
})

module.exports = postRouter