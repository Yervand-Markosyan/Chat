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
router.get("/convers:userid", authMiddleware, MessengerControler.getConvById);
router.get("/aboutuser", authMiddleware, MessengerControler.aboutConvers);
// add Mess
router.post("/sendmessage", MessengerControler.addMess);

// get mess
router.get("/mess:coversId", authMiddleware, MessengerControler.getConvById);

module.exports = router;

