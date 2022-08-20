//lib
const  bcrypt = require("bcryptjs");
// mongodb
const User = require("../models/user");
class adminController {
  async getUsers(req, res) {
    try {
      const data = await User.find();
      return res.json(data);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteUsers(req, res) {
    
    User.deleteOne(req.body)
      .then((data) => res.send(req.body))
      .catch((err) => res.send((req.statusCode = 500)));
  }
  async adminSignin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateAccesToken(user.email, user.roles);
        res.json(true);
      } else {
        return res
          .status(401)
          .json({ massage: `Acaunt  ${email} is not found` });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async getUserById(req,res){
    const id = req.body.id
    const user = await User.find({_id:id})
    res.json(user[0])
  }
}
module.exports = new adminController();


