const mongoose = require('mongoose')

const MessageSchame = new mongoose.Schema(
{
    conversationId:{
        type: String,
    },
    sender:{
        type:String
    },
    message:{
        type:String
    },
    date:{
        type:String
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Message", MessageSchame)