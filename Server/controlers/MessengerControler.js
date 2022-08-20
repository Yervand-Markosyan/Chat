// mongodb
const User = require("../models/user");
const MessageSchame = require("../models/MessageSchame");
const ConversationSchame = require("../models/ConversationSchame");
const GrupConversationsSchame = require("../models/GrupConversationsSchame");

class MessageControlre {
  //////////////////////////////////// Conversation /////////////////////////////////

  async newConversation(req, res) {
    console.log(req.params);
    const newConversation = new ConversationSchame({
      members: [req.params.user1, req.params.user2],
    });
    try {
      const savedConv = await newConversation.save();
      res.json(savedConv);
    } catch (error) {
      res.status(500).json("conversation dont saveing");
    }
  }
  ////  persons
  async getConvById(req, res) {
    try {
      const conversation = await ConversationSchame.find({
        members: { $in: [req.body.loggedUser_id] },
      });
      res.json(conversation);
    } catch (error) {
      res.status(500).json("conversation not found");
    }
  }
  ////// person info
  async aboutConvers(req, res) {
    try {
      const data = {};
      const userId = req.body.companion_id;
      const conversId = req.body.conversId ? req.body.conversId : null;

      const aboutUser = await User.find({ _id: userId });

      const lastMess = conversId ? await MessageSchame.find({
        conversationId: conversId,
        senderId: userId,
      }): null
      data._id = aboutUser[0]._id
      data.name = aboutUser[0].name;
      data.lastname = aboutUser[0].lastname;
      data.imgs = aboutUser[0].imgs;
      data.contacts = aboutUser[0].contacts
      data.lastMessage = lastMess ? lastMess.length > 0 ? lastMess[lastMess.length - 1].message : null: null;
      data.lastMessageDate = lastMess ?  lastMess.length > 0 ? lastMess[lastMess.length - 1].date.minutes : null: null;
      res.json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json("user is not faund");
    }
  }

  //////////////////////////////////// Goups /////////////////////////////////
  async newGrupConversation(req, res) {
    const groupInfo = {
      name: req.body.name,
      members: [req.body.creator_id],
    }
    if (req.body.img) {
      groupInfo.img = req.body.img
    }
    try {
      const newConversation = new GrupConversationsSchame(groupInfo)
      const savedConv = await newConversation.save();

      res.json(savedConv);
    } catch (error) {
      res.status(500).json("conversation dont saveing");
    }
  }
  /// add user to group
  async addUsersGrup(req, res) {
    try {
      const conversation_id = req.body.conversation_id
      const members = req.body.newMembers
      const data = await GrupConversationsSchame.findOneAndUpdate({ _id: conversation_id }, { members, })
      const newData = await GrupConversationsSchame.find({ _id: conversation_id })
      res.json(newData);
    } catch (error) {
      res.status(500).json("conversation not found");
    }
  }

  //// get groups 
  async getGropuById(req, res) {
    try {
      const groups = await GrupConversationsSchame.find({
        members: { $in: [req.body.loggedUser_id] },
      });
      res.json(groups);
    } catch (error) {
      res.status(500).json("conversation not found");
    }
  }


  ////////////////////////////////// Messages ////////////////////////////////////////

  async addMess(req, res) {
    const newMess = new MessageSchame(req.body);

    try {
      const saveMess = await newMess.save();
      res.json(saveMess);
    } catch (error) {
      res.status(500).json("Message dont saved");
    }
  }

  async getMess(req, res) {
    try {
      const message = await MessageSchame.find({
        conversationId: req.params.coversId,
      });
      res.json(message);
    } catch (error) {
      res.status(500).json("Message note found");
    }
  }

    /// delete message
async deleteMess(req,res){
  const _id = req.params.mess_id
  const conversationId = req.params.conversId
   MessageSchame.deleteOne({_id,})
  .then(d => {
     MessageSchame.find({conversationId,})
     .then(data=>{
       res.json(data)
     })
  })
}
//// update
async updateMess(req,res){
const _id = req.params.mess_id
const conversationId = req.params.conversId
const message = req.params.message
MessageSchame.updateOne({_id,},{message,}) 
.then(d => {
   MessageSchame.find({conversationId,})
   .then(data=>{
     res.json(data)
   })
})
}
  //////// get users for search

  async getUsersForSearch(req, res) {
    try {
      const users = await User.find({})
      const arr = []
      users.map(user => {
        arr.push({
          user_id: user._id,
          imgs: user.imgs,
          fullname: user.name + " " + user.lastname
        })
      })
      res.json(arr);
    } catch (error) {
      res.status(500).json(" not internet connection ");
    }
  }

}


module.exports = new MessageControlre();
