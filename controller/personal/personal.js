'use strict';

import UsersModel from '../../models/users/users'

class Personal{
  constructor(){
    //定义实例属性
    this.updateUserInfo = this.updateUserInfo.bind(this);
  };
  /**
   * 获取用户信息
  */
  async updateUserInfo(req, res, next){   //异步函数
    const {account, name, email, phone} = req.body;
    let updateParams = {};
    //console.log(account, name, email, phone);

    try{
        if (!account) {
          throw new Error('账户不允许为空');
        }
        else if(!name){
          throw new Error('用户名不允许为空');
        };

        //验证用户名
        if(name){  
          if(account.length > 12){
            throw new Error('账号长度必须小于12位');
          };
          updateParams['name'] = name;
        };

        //验证邮箱
        if(email){
          let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
          if(!reg.test(email)){
            throw new Error('邮箱格式不正确');
          };
          updateParams['userEmail'] = email;
        }

        //验证手机号
        if(phone){
          if(phone.length < 11){
            throw new Error('手机号码位数不正确');
          }else{
            let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!reg.test(phone)) {
              throw new Error('手机号码格式不正确');
            }
            updateParams['phoneNumber'] = phone;
          }
        };

        UsersModel.update({"account":account}, updateParams, function(err, docs){  // 个人信息修改
          if(err) console.log("update==>", err);
          console.log("update==>", docs);
          res.send({
            status: 1,
            type: 'SUCCESS',
            message: '修改成功！'
          })
        });
    }catch(err){
      res.send({
        status: 0,
        type: 'ERROR_QUERY',
        message: err.message,
      })
      return
    }
	}
}

export default new Personal();