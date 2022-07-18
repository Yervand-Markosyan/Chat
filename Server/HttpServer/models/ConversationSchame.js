const mongoose = require('mongoose')

const ConversationSchame = new mongoose.Schema(
{
    members:{
        type: Array,
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Conversation", ConversationSchame)