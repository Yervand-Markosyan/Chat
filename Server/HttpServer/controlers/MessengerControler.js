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
        members: { $in: [req.body.userId] },
      });
      res.json(conversation);
    } catch (error) {
      res.status(500).json("conversation not found");
    }
  }
  async Allinfo(req, res) {
    try {
      const users = await User.find({});
      const obj = {}
      const allUsers = {}
      users.map((item) => {
        const item_id = item._id
       allUsers[item_id] = {
          fullname : item.name +" "+ item.lastname,
          imgs : item.imgs,
          contacts: item.contacts,
          companion_id : item._id,
        }
      });
      obj.allUsers = allUsers

      const conversation = await ConversationSchame.find({
        members: { $in: [req.body.thisUserId] },
      });
      obj.conversations = conversation
      res.json(obj);
    } catch (error) {
      res.status(500).json("connection error");
    }
  }
  async aboutConvers(req, res) {
    try {
      const genData = {};
      const userId = req.body.userId;
      const coversId = req.body.coversId;

      const aboutUser = await User.find({ _id: userId });

      const lastMess = await MessageSchame.find({
        conversationId: coversId,
        sender: userId,
      });
      genData.name = aboutUser[0].name;
      genData.lastname = aboutUser[0].lastname;
      genData.img = aboutUser[0].img;
      genData.online = aboutUser[0].online;
      genData.lastMessage = lastMess[lastMess.length - 1].message;
      genData.lastMessageDate = lastMess[lastMess.length - 1].date;
      res.json(genData);
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
}
module.exports = new MessageControlre();
