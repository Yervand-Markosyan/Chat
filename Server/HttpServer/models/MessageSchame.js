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
   //  date:{
   //      hours:{
   //          type:Number,
   //          require: true,
   //       },
   //       minutes:{
   //         type:Number,
   //         require: true,
   //      },
   //       secnds:{
   //          type:Number,
   //          require: true,
   //       },
   //       weekday:{
   //          type:Number,
   //          require: true,
   //       },
   //       day:{
   //          type:Number,
   //          require: true,
   //       },
   //       month:{
   //          type:Number,
   //          require: true,
   //       },
   //       year:{
   //          type:Number,
   //          require: true,
   //       },
   //      type:Object,
   //      require: true,
   //  }
}
)

module.exports = mongoose.model("Message", MessageSchame)