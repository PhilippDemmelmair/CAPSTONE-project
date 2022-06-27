import {timeStamp} from 'console';
import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const schema = new Schema(
	{
		title: String,
		author: String,
		published: {type: Date, default: Date.now},
		views: [],
		text: String,
	},
	{
		versionKey: false,
	}
);

export default model('blogpost', schema, 'blogposts');
