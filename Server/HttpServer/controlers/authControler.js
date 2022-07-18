// libs
const  bcrypt = require("bcryptjs");
const  jwt = require("jsonwebtoken");
const  nodemailer = require("nodemailer");
const  dotenv = require("dotenv");
const  { validationResult } = require("express-validator");
// mongodb
const User = require("../models/user");
const  Role = require("../models/role");
//secret
const  Secret = require("../secrets/config");


dotenv.config();
const generateAccesToken = (email, roles) => {
  const payload = {
    email,
    roles,
  };
  return jwt.sign(payload, Secret.secret, { expiresIn: "240s" });
};

class authControler {
  async signUp(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ massage: "registration errors", errors });
      }
      const { email, password } = req.body;
      const condidate = await User.findOne({ email });
      if (condidate) {
        return res.status(400).json({ massage: "User already exists" });
      }
      const heshPassword = bcrypt.hashSync(password, 7);
      req.body.password = heshPassword;
      const rolee = await Role.findOne({ value: "USER" });
      req.body.roles = rolee.value;
      const user = new User(req.body);
      const token = generateAccesToken(user.email, user.roles);
      const saved = await user.save();
      return res.json({ token, expiresIn: "240s" , user_id : saved._id });
    } catch (e) {
      console.log(e);
      res.status(400).json({
        massage: "SignUp error",
      });
    }
  }
  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email:email });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateAccesToken(user.email, user.roles);
        const thisUserAbout = {
          fullName: user.name + user.lastname,
          imgs: user.imgs,
          contacts: user.contacts,
          thisUser_id:user._id
        }
        res.json({ 
          token:{
            token,
             expiresIn: "240s"},
          thisUserAbout });
      } else {
        return res
          .status(401)
          .json({ massage: `Acaunt  ${!user.email?email:"pasword"} is not found` });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async getToken(req, res) {
    try {
      const reqToken = req.headers.authorization.split(" ")[1];
      const decodeData = jwt.verify(reqToken, Secret.secret);
      const token = generateAccesToken(decodeData.email, decodeData.roles);
      res.json({ 
        token:{
        token,
         expiresIn: "240s"}, });
      // res.json("")
    } catch (e) {
      console.log(e);
      return res.status(404).json({ massage: "miban sxal es are" });
    }
  }
  // async forgetPassword(req, res) {
  //   const body = req.body;
  //   let testEmailAccount = await nodemailer.createTestAccount();

  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.yandex.ru",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: "beauty.team.1@yandex.ru",
  //       pass: "a171913a",
  //     },
  //   });

  //   let result = await transporter.sendMail({
  //     = require( "beauty.team.1@yandex.ru",
  //     to: "yer.markosyan@gmail.com",
  //     subject: "Message = require(Node js",
  //     text: "This message was sent = require(Node js server.",
  //     html: "This <i>message</i> was sent = require(<strong>Node js</strong> server.",
  //   });
  }
module.exports = new authControler();
