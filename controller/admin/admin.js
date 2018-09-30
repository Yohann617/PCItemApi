'use strict';

// import AdminModel from '../../models/admin/admin';
import Users from '../../models/admin/admin';

class Admin{
  constructor(){
    //定义实例属性
    this.getUserInfo = this.getUserInfo.bind(this)  //获取用户信息
  };
  /**
   * 获取用户信息
  */
  async getUserInfo(req, res, next){
    const { account } = req.body;
    //console.log(account);
    const userInfo = await Users.findOne({"account":account},function(err,docs){ 
      if(err){
        console.log(err);
      };
      return docs;
    });
      
    console.log(userInfo);

    if(userInfo){
      res.send({
        status: 0,
        data: userInfo,
        message:"登陆成功11"
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