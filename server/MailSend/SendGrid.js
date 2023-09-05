const sgMail = require("@sendgrid/mail");

// const API_KEY = "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";

sgMail.setApiKey("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");

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

sgMail.send(message, function (err, info) {
    if (err) {
        console.log("Email not Send")
    }
    else {
        console.log("Email send Successfully ")
    }
});