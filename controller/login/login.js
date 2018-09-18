'use strict';

import UsersModel from '../../models/users/users'

class Login{
  constructor(){
    //定义实例属性
    this.login = this.login.bind(this);
  };
  /**
   * 获取用户信息
  */
  async login(req, res, next){   //异步函数
    //console.log(req);
    const {account, password} = req.body;

    try{
      if (!account) {
        throw new Error('用户名参数错误');
      }else if(!password){
        throw new Error('密码参数错误');
      }
    }catch(err){
      //console.log('登陆参数错误', err);
      res.send({
        status: 0,
        type: 'ERROR_QUERY',
        message: err.message,
      })
      return
    }
    try{
      const user = await UsersModel.findOne({'name':account});
      console.log(user);

      // 用户不存在
      if (!user) {
        //console.log('用户不存在');
        res.send({
          status: 0,
          type: 'NO_USER',
          message: '用户不存在',
        })
      }else if (user.password.toString() !== password.toString()) {
        //console.log('用户登录密码错误')
        res.send({
          status: 0,
          type: 'ERROR_PASSWORD',
          message: '密码错误',
        })
        return 
      }else{
        res.send({
          status: 1,
          type: 'SUCCESS',
          message: '登陆成功!',
        })
        return 
      }
    }catch(err){
      //console.log('用户登陆失败', err);
      res.send({
        status: 0,
        type: 'SAVE_USER_FAILED',
        message: '登陆失败',
      })
    }
	}
}

export default new Login();