const {loginUser} = require('../services/loginServices');

class LoginController {
    async LoginUser(req,res) {
        try {
            const user = await loginUser(req);
            
            if(user) {
                res.send("Logged in")
                console.log('User Passed')
            }
            else{
                console.log('User Failed');
                res.send("Invalid username or password");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginController();