'use strict';

import mongoose from 'mongoose';

const guessLikeData = [
    {
        "title":"like_01",
        "img_url":"static/images/home/like.png"
    },
    {
        "title":"like_02",
        "img_url":"static/images/home/like.png"
    },
    {
        "title":"like_03",
        "img_url":"static/images/home/like.png"
    },
    {
        "title":"like_04",
        "img_url":"static/images/home/like.png"
    },
    {
        "title":"like_05",
        "img_url":"static/images/home/like.png"
    }
];

class GuessLikeModel{
	constructor(){
		this.findOne = this.findOne.bind(this);
	};

	findOne(){
		return guessLikeData;
	}
}

export default new GuessLikeModel();
