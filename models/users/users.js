'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({  //新建Schema实例
	name: String,
	password: String,
	id: Number
})

const Users = mongoose.model('users', usersSchema);

export default Users;
