const { loginUser } = require('../services/loginServices');

class LoginController {
    async LoginUser(req, res) {
        try {
            const user = await loginUser(req);

            if (user) {
                res.json(user);
                console.log('User Passed,Logged in')
            }
            else {
                console.log('User Failed,Invalid username or password');
                res.send("Invalid username or password");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginController();