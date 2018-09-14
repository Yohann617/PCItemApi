'use strict';

import mongoose from 'mongoose';

const recommendData = [
    {
        "title":"Nilujiang",
        "img_url":"static/images/home/qq.png",
        "info":"Nilujiangbilibilijiangjianginfoinfoinfoinfo"
    },
    {
        "title":"DaimaoKing",
        "img_url":"static/images/home/qq.png",
        "info":"DaimaoKingbilibilijiangjianginfoinfoinfoinfo"
    },
    {
        "title":"SikarhaShijiang",
        "img_url":"static/images/home/qq.png",
        "info":"SikarhaShijiangbilibilijiangjianginfoinfoinfoinfo"
    },
    {
        "title":"ZhendeAlter",
        "img_url":"static/images/home/qq.png",
        "info":"ZhendeAlterbilibilijiangjianginfoinfoinfoinfo"
    }
];

class recommendModel{
	constructor(){
		this.findOne = this.findOne.bind(this);
	};

	findOne(){
		return recommendData;
	}
}

export default new recommendModel();
