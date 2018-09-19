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
    let userEmail = '';
    let userphoneNumber = phoneNumber;
    try{
      if (!account) {
        throw new Error('用户名不允许为空');
      }else if(!password){
        throw new Error('密码不允许为空');
      };

      if(account){  //账号存在，验证账号
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
      if(password){  //验证密码
        let reg = /^[a-zA-Z0-9]+$/;  //只能出现字母和数字
        if(account.length < 6){
          throw new Error('密码长度必须大于6位');
        }else if(!reg.test(account)){
          throw new Error('密码不能包含特殊字符');
        }
      }
      if(phoneNumber){  //验证手机号 and 邮箱
        if(isNaN(Number(phoneNumber))){  //邮箱
          let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
          if (!reg.test(phoneNumber)) {
            throw new Error('邮箱格式不正确');
          }else{
            userEmail = phoneNumber;
            userphoneNumber = 0;
          }
        }else{   //手机号
          if(phoneNumber.length < 11){
            throw new Error('手机号码位数不正确');
          }else{
            let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!reg.test(phoneNumber)) {
              throw new Error('手机号码格式不正确');
            }
          }
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

      // 用户不存在
      if (!user) {
        const newUser = {
          name: account, 
          account: account, 
          password: password, 
          phoneNumber: parseInt(userphoneNumber)?parseInt(userphoneNumber):0,
          userEmail: userEmail?userEmail:'',
          authority: authority?authority:'',
          level: level?level:'',
          headPicUrl: headPicUrl?headPicUrl:''
        };
        
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
          message: '用户已存在，可选择"找回密码"',
        })
        return 
      }
    }catch(err){
      console.log(err.message);
      res.send({
        status: 0,
        type: 'SAVE_USER_FAILED',
        message: '注册失败',
      })
    }
	}
}

export default new Regist();