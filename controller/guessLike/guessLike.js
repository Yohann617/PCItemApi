'use strict';

import GuessLikeModel from '../../models/guessLike/guessLike';

class GuessLike{
  constructor(){
    this.getLikeData = this.getLikeData.bind(this)  //登陆
  };
  /**
   * 获取数据
  */
  async getLikeData(req, res, next){   //异步函数
    const guessLike = await GuessLikeModel.findOne();  //await表示紧跟在后面的表达式需要等待结果。
    if(guessLike){
      res.send({
        status: 0,
        data: guessLike,
        message:"'猜你喜欢'数据获取成功"
      })
      return
    }else{
      res.send({
        status: 1,
        type: 'GET_ERROR_PARAM',
        message: '数据获取失败',
      });
    }
	}
}

export default new GuessLike();