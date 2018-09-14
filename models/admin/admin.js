'use strict';

import mongoose from 'mongoose';

const  usersArr= [
    {
	  'name': 'Yohann',
	  'id':'1',
	  'create_time':'2018-8-24',
	  'admin':{type: 'admin', default: '管理员'},
	  'status': 1,
	  'city': 'XiaMen',
      'account': 'Yohann617',
      'password': '123456',
      'authority': 'admin',
      'headPicUrl': '',
      'level': 'Vip Top'
    },
    {
	  'name': 'Hutter',
	  'id':'2',
	  'create_time':'2018-8-24',
	  'admin':{type: 'admin', default: '管理员'},
	  'status': 2,
	  'city': 'XiaMen',
      'account': 'Hutter617',
      'password': '123456',
      'authority': 'user',
      'headPicUrl': '',
      'level': 'Vip 0'
    }
  ]

const AdminModel_data = usersArr[0];

const Schema = mongoose.Schema;

const adminSchema = new Schema({  //新建Schema实例
	name: String,
	age: String,
	id: Number
})

const Users = mongoose.model('Users', adminSchema);

// class AdminModel{
// 	constructor(){
// 		this.findOne = this.findOne.bind(this);
// 	};

// 	findOne(obj){
// 		Users.find(function(err,docs){
// 			if(err){
// 				console.log(err);
// 			}
// 			console.log(docs);
// 		});
// 		Users.findOne({"name":"Yohann"},function(err,docs){
// 			if(err){
// 				console.log(err);
// 			}
// 			console.log("admin-models",docs);
// 			return docs;
// 		});
// 		console.log(Users);
// 	}
// }

export default Users;
