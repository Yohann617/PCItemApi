'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({  //新建Schema实例
  name: String,
  age: Number,
  password: String,
  account: String,
  authority:String,
  level:String,
  phoneNumber:Number,
  userEmail:String,
  headPicUrl:String
})

const Users = mongoose.model('users', usersSchema);

export default Users;
