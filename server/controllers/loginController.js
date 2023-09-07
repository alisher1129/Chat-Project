const {loginUser} = require('../services/loginServices');

class LoginController {
    async LoginUser(req, res) {
        try {
            const user = await loginUser(req);
            if(user) {
                console.log('User Passed');
                return res.send("Logged in");
            }
            else{
                console.log('User Failed');
                return res.send("Invalid username or password");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginController();