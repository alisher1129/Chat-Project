const { loginUser } = require('../services/loginServices');

class LoginController {
    async LoginUser(req, res) {
        try {
            const user = await loginUser(req);
            if (user) {
                res.status(200).json(user);
                console.log('User Passed,Logged in')
            }
            else {
                console.log('User Failed,Invalid username or password');
                res.status(401).send("Invalid username or password");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginController();