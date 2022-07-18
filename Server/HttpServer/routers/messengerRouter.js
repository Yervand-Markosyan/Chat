const authMiddleware = require("../middleware/authMiddleware");
const { Router } = require("express");
const MessengerControler = require("../controlers/MessengerControler");

const router = new Router();

//add Convers
router.post("/new_convers", MessengerControler.newConversation);

// get Convers
router.get("/convers:userid", MessengerControler.getConvById);
router.get("/aboutuser", MessengerControler.aboutConvers);
router.post("/allinfo", MessengerControler.Allinfo);
// add Mess
router.post("/sendmess", MessengerControler.addMess);

// get mess
router.get("/mess:coversId", MessengerControler.getConvById);

module.exports = router;

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////           chmoranaq midlewarner dneq
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
