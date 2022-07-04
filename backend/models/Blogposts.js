import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const schema = new Schema(
	{
		title: String,
		author: String,
		published: {type: Date},
		views: [],
		text: String,
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

export default mongoose.models.Blogpost || model('Blogpost', schema);
