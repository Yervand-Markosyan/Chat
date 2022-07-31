// mongodb
const User = require("../models/user");
const MessageSchame = require("../models/MessageSchame");
const ConversationSchame = require("../models/ConversationSchame");

class MessageControlre {
  //////////////////////////////////// Conversation /////////////////////////////////

  async newConversation(req, res) {
    const newConversation = new ConversationSchame({
      members: [req.body.senderId, req.body.receiverId],
    });
    try {
      const savedConv = await newConversation.save();
      res.json(savedConv);
    } catch (error) {
      res.status(500).json("conversation dont saveing");
    }
  }

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
  async aboutConvers(req, res) {
    try {
      const data = {};
      const userId = req.body.companion_id;
      const coversId = req.body.coversId;

      const aboutUser = await User.find({ _id: userId });

      const lastMess = await MessageSchame.find({
        conversationId: coversId,
        sender: userId,
      });
      data._id = aboutUser[0]._id
      data.name = aboutUser[0].name;
      data.lastname = aboutUser[0].lastname;
      data.imgs = aboutUser[0].imgs;
      data.contacts = aboutUser[0].contacts
      // data.lastMessage = lastMess[lastMess.length - 1].message;
      // data.lastMessageDate = lastMess[lastMess.length - 1].date;
      res.json(data);
    } catch (e) {
      console.log(e);
      res.status(500).json("user is not faund");
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
      const message = MessageSchame.find({
        conversationId: req.body,
      });
      res.json(message);
    } catch (error) {
      res.status(500).json("Message note found");
    }
  }
  //////// get users for search
  
  async getUsersForSearch(req,res){
    try {
      const users = await User.find({})
      const arr = []
      users.map(user => {
         arr.push({
          user_id: user._id,
          imgs : user.imgs,
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
