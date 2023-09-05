const User = require("../models/userModel")


//Register a new user
class UserData {
    async CreateUser(req, res) {
        try {

            const { email, username, mobile, password } = req;
            const NewUser = new User(
                {
                    email: email,
                    username: username,
                    mobile: mobile,
                    password: password
                }
            );
            const user = await NewUser.save();
            return user;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UserData();

