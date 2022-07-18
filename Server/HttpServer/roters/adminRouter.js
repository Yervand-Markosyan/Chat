// lib
const { Router } = require("express");
// middleWare
const adminController = require("../controlers/adminControler");
const roleMiddleware = require("../middleware/roleMiddleware");


const router = new Router();

router.get("/users", roleMiddleware(["ADMIN"]), adminController.getUsers);
router.post(
  "/deletuser",
  roleMiddleware(["ADMIN"]),
  adminController.deleteUsers
);
router.post("/Asignin", roleMiddleware(["ADMIN"]), adminController.adminSignin);

router.post("/user",adminController.getUserById)
module.exports = router;
