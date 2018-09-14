'use strict';

import recommendModel from '../../models/recommend/recommend';

class recommend{
  constructor(){
    this.getrecommendData = this.getrecommendData.bind(this)
  };
  /**
   * 获取数据
  */
  async getrecommendData(req, res, next){   //异步函数
    const recommendData = await recommendModel.findOne();  //await表示紧跟在后面的表达式需要等待结果。
    if(recommendData){
      res.send({
        status: 0,
        data: recommendData,
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

export default new recommend();