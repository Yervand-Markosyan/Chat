const mongoose = require('mongoose')

const MessageSchame = new mongoose.Schema(
{
    conversationId:{
        type: String,
        require: true,
    },
    senderId:{
        type:String,
        require: true,
    },
    message:{
        type:String,
        require: true,
    },
    date:{
        hours:{
            type:String,
            require: true,
         },
         minutes:{
           type:String,
           require: true,
        },
         secnds:{
            type:String,
            require: true,
         },
         weekday:{
            type:String,
            require: true,
         },
         day:{
            type:String,
            require: true,
         },
         month:{
            type:String,
            require: true,
         },
         year:{
            type:String,
            require: true,
         },
        type:Object,
        require: true,
    }
}
)

module.exports = mongoose.model("Message", MessageSchame)