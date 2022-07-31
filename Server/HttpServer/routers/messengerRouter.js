// libes
const { Router } = require("express");
// middleware
const authMiddleware = require("../middleware/authMiddleware");
// controler
const MessengerControler = require("../controlers/MessengerControler");

const router = new Router();

//add Convers
router.post("/new_convers", authMiddleware, MessengerControler.newConversation);

// get Convers
router.post("/conversation_by_user_id", authMiddleware, MessengerControler.getConvById);
router.post("/about_companion", authMiddleware, MessengerControler.aboutConvers);
// add Mess
router.post("/sendmessage", MessengerControler.addMess);
// get mess
router.get("/mess:coversId", authMiddleware, MessengerControler.getConvById);
// get registred users for search
router.get("/all_registered_users", authMiddleware, MessengerControler.getUsersForSearch)
module.exports = router;

