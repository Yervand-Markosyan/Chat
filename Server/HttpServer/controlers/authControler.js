// libs
const  bcrypt = require("bcryptjs");
const  jwt = require("jsonwebtoken");
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
      const thisUserAbout = {
        fullName: saved.name + saved.lastname,
        imgs: saved.imgs,
        contacts: saved.contacts,
        thisUser_id:saved._id
      }
      return res.json({ token, expiresIn: "240s" , thisUserAbout });
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
  }
module.exports = new authControler();
