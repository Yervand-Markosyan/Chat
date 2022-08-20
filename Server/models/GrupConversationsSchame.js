const mongoose = require('mongoose')

const GrupConversationSchame = new mongoose.Schema(
{
    name:{
        type: String,
        required:true
    },
    members:{
        type: Array,
        required:true
    },
    img:{
        type:String,
        default:"http://localhost:3030/chatpx/files/62e7204c3d3d366b68387dbd/GROUP_AVATAR.png"
    }
},
{timestamps: true}
)

module.exports = mongoose.model("GrupConversation", GrupConversationSchame)