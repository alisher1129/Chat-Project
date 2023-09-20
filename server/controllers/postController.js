const { userPost, getPost} = require("../services/postServices")



class postController {
    async postUser(req, res) {
        try {
            const user = await userPost(req);
            console.log(user);
            if (user) {
            
                res.status(200).json(user);
                console.log('Post save ')
            }
            else {
                console.log('');
                res.status(401).send("");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getUserPost(req, res) {
        try {
            const user = await getPost(req);
            console.log(user);
            if (user) {
            
                res.status(200).json(user);
                console.log('Posts of User')
            }
            else {
                console.log('Posts not found');
                res.status(404).send("");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new postController();