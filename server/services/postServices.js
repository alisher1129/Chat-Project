const postModel = require("../models/PostModel/postModel");
const userModel = require("../models/userModel")

const jwt = require('jsonwebtoken')

class postData {
    async userPost(req, res) {
        let { title, photo } = req.body;
        try {
            const token = req.headers['x-access-token'];
            console.log(token)
            const val = jwt.decode(token);
            console.log(val.id);
            console.log("val", val)
            const checkUser = await postModel.findOne({
                userId: val.id
            })
            console.log(checkUser)
            const savePost = postModel({
                userId: val.id,
                title: title,
                photo: photo
            })
            await savePost.save()
            return savePost;
        }

        catch (err) {
            console.log("Error Post Not Save :", err);
            res.status(500).json("Internal server error");
        }
    }

    async getPost(req, res) {
        // let { userId } = req.body;
        // console.log('service id',userId)
        try {
            const CheckPost = await postModel.find({
                userId: req.params.userId,
            })
            return CheckPost;
        } catch (err) {
            console.log("User not found in DB", err)

        }
    }
    async getAllPost(req, res) {

        try {
            const allPost = await postModel.find().populate('userId')
            return allPost;
        } catch (err) {
            console.log("Posts not found in DB", err)

        }
    }
    async showUser(req, res) {

        try {
            let { username } = req.body
            const user = await userModel.findOne({
                username: username
            })
            console.log("user data", user)
            const userProfile = await postModel.find({
                userId: user._id
            }).populate('userId');
            console.log("user", userProfile)
            console.log("userProfile", userProfile)
            return userProfile;
        } catch (err) {
            console.log("user not found", err)

        }
    }


}

module.exports = new postData();