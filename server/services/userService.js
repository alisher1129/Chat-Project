const User = require("../models/userModel/userModel")
const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");
require("dotenv").config()
const apikey = (process.env.API_KEY)
sgMail.setApiKey(apikey);

//Register a new user
class UserData {
    async CreateUser(req, res) {
        const { email, username, mobile, password } = req;
        const token = crypto.randomBytes(64).toString("hex");
        const NewUser = new User(
            {
                email: email,
                username: username,
                mobile: mobile,
                password: password,
                token: token,
                isVerified: false,
            }
        );

        const message = {
            to: "alisheramir36@gmail.com",
            from: {
                name: "Verification Email",
                email: "ali.sher@vaival.com"
            },
            subject: "Subject of Email",
            templateId: "d-05f595a021fb4ccbbabb8997e55ee421", // Specify the template ID here
            dynamicTemplateData: {
                verification_link: `http://localhost:4000/verify?token=${token}`,
            } // Pass dynamic data to personalize the template

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


    async VerifyEmail(req, res) {

        try {
            console.log(req.query.token)
            const Myuser = await User.findOne({ token: req.query.token });
            if (!Myuser) {
                req.flash("Error , Token is not valid")
                return redirect("/");
            }
            else {
                Myuser.token = null;
                Myuser.isVerified = true;

                await Myuser.save();
                return res.send({
                    message: "Email Verified"
                })

            }

        }
        catch {
            (error) => console.log(error);

        }


    }
    async getUser(req, res) {
        try {
            const user = await User.findOne({
                _id: req.params.userId
            });
            console.log(user);

            return user;

        }
    catch (error) {
            console.log(error);
        }
    }
    async getAlluser(req, res) {
        try {
            const user = await User.find();
            console.log(user);

            return user;

        }
    catch (error) {
            console.log(error);
        }
    }


}

module.exports = new UserData();

