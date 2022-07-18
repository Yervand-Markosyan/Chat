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
      default:""
    },
    email:{
      type:String,
      default:""
    },
    socialNetworks:{
      type:Array,
      default:[]
    },
    type:Array,
  },
  roles: {
    type: String,
    ref: "Role",
  },
},{timestamps: true});

module.exports = mongoose.model("Users", usersSchame);
