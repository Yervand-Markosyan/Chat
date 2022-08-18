const mongoose = require('mongoose')

const usersSchame = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  imgs: {
    type:Array,
    required:true
  },
  contacts:{
    Phone:{
      type:String,
      default:"+374(98)..."
    },
    email:{
      type:String,
      default:"defauilt.email.ru"
    },
    socialNetworks:{
      fb:{
        type:String,
        default:"FaceBook.com"
      },
      instagran:{
        type:String,
        default:"Instagran.com"
      },
      linkedin:{
        type:String,
        default:"Linkedin.com"
      },
      type:Object,
      
    },
    type:Object,
    default :{
      Phone:"+374(98)...",
      email:"{...}.email.ru",
      socialNetworks:{
        fb:"FaceBook.com",
        instagran:"Instagran.com",
        linkedin:"Linkedin.com",
      },
    }
  },
  dateOffline:{
    type: String,
  },
  roles: {
    type: String,
    ref: "Role",
  },
},{timestamps: true});

module.exports = mongoose.model("Users", usersSchame);
