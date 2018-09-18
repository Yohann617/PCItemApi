'use strict';

import UsersModel from '../../models/users/users'

class Regist{
  constructor(){
    //定义实例属性
    this.regist = this.regist.bind(this);
  };
  /**
   * 获取用户信息
  */
  async regist(req, res, next){   //异步函数
    const {account, password, phoneNumber, authority, level, headPicUrl} = req.body;

    try{
      if (!account) {
        throw new Error('用户名不允许为空');
      }else if(!password){
        throw new Error('密码不允许为空');
      };

      if(account){  //账号存在
        let numberRule = /[0-9]/;
        let reg = /^[a-zA-Z0-9]+$/;  //只能出现字母和数字
        if(account.length < 6){
          throw new Error('账号长度必须大于6位');
        }
        // else if(!isNaN(Number(account))){
        //   throw new Error('账号不能是纯数字');
        // }
        // else if(!numberRule.test(account)){
        //   throw new Error('账号不能是纯英文');
        // }
        else if(!reg.test(account)){
          throw new Error('账号不能包含特殊字符');
        }
      };
      if(password){
        let reg = /^[a-zA-Z0-9]+$/;  //只能出现字母和数字
        if(account.length < 6){
          throw new Error('密码长度必须大于6位');
        }else if(!reg.test(account)){
          throw new Error('密码不能包含特殊字符');
        }
      }
    }catch(err){
      res.send({
        status: 0,
        type: 'ERROR_QUERY',
        message: err.message,
      })
      return
    }
    try{
      const user = await UsersModel.findOne({'account':account});
      //console.log(user);

      // 用户不存在
      if (!user) {
        const newUser = {
          name: account, 
          account: account, 
          password: password, 
          phoneNumber: phoneNumber?phoneNumber:0,
          authority: authority?authority:0,
          level: level?level:0,
          headPicUrl: headPicUrl?headPicUrl:0
        };
        //console.log(UserModel);
        UsersModel.create(newUser, function(err, docs){  // 注册
          if(err) console.log(err);
          console.log(docs);
          res.send({
            status: 1,
            type: 'SUCCESS',
            message: '注册成功！',
            data: docs
          })
        });
      }else{
        res.send({
          status: 0,
          type: 'USER_EXISTED',
          message: '用户已存在',
        })
        return 
      }
    }catch(err){
      res.send({
        status: 0,
        type: 'SAVE_USER_FAILED',
        message: '注册失败',
      })
    }
	}
}

export default new Regist();