'use strict';

// import AdminModel from '../../models/admin/admin';
import Users from '../../models/admin/admin';

class Admin{
  constructor(){
    //定义实例属性
    this.login = this.login.bind(this)  //登陆
  };
  /**
   * 获取用户信息
  */
  async login(req, res, next){   //异步函数
    //console.log(req);
    const admin = await Users.findOne({"name":"Yohann"},function(err,docs){  //await表示紧跟在后面的表达式需要等待结果。
      if(err){
        console.log(err);
      };
      return docs;
    });
      
    console.log("admin-controller",admin);
    if(admin){
      res.send({
        status: 0,
        data: admin,
        message:"登陆成功"
      })
      return
    }else{
      res.send({
        status: 1,
        type: 'GET_ERROR_PARAM',
        message: '登陆失败',
      });
    }
	}
}

export default new Admin();