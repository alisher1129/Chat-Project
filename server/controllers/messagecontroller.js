const { sendMessage, getMessage } = require('../services/messageServices');


class messageController {
    async sendMessage(req, res) {
        try {
            const message = await sendMessage(req, res);
            return res.status(200).json(message);
        } catch (error) {
            console.log(error);
        }
    }

    async getMessage(req, res) {
        try {
            const message = await getMessage(req, res);
            return res.status(200).json(message);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new messageController();