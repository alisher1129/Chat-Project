const User = require("../models/userModel")
const sgMail = require("@sendgrid/mail");
require("dotenv").config()
const apikey = (process.env.API_KEY)
sgMail.setApiKey(apikey);

//Register a new user
class UserData {
    async CreateUser(req, res) {
        const { email, username, mobile, password } = req;
        const NewUser = new User(
            {
                email: email,
                username: username,
                mobile: mobile,
                password: password
            }
        );
        
        const message = {
            to: "asher7258@gmail.com",
            from: {
                name: "Verification Email",
                email: "ali.sher@vaival.com"
            },
            subject: "Subject of Email",
            templateId: "d-05f595a021fb4ccbbabb8997e55ee421", // Specify the template ID here
            // dynamicTemplateData: dynamicData, // Pass dynamic data to personalize the template

        }

        try {
            sgMail.send(message, function (err, info) {
                if (err) {
                    console.log("Email not Send")
                }
                else {
                    console.log("Email send Successfully ")
                }
            });

            const user = await NewUser.save();
            return user;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UserData();

