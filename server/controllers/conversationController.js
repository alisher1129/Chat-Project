const {
    createNewConversation,
    getConversations,
} = require('../services/conversationServices');

class conversationController {
    async createNewConversation(req, res) {
        try {
            const newConversation = await createNewConversation(req);
            return res.status(200).json(newConversation);
        } catch (error) {
            console.log(error);
        }

    }

    async getConversations(req, res) {
        try {
            const conversation = await getConversations(req);
            return res.status(200).json(conversation);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new conversationController();