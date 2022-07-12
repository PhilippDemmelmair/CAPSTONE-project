import connectToMongodb from '../../backend/db/connect';
import Blogposts from '../../backend/models/Blogposts';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		const posts = await Blogposts.find({});
		return response.status(200).json({data: posts});
	}
	if (request.method === 'POST') {
		const newPost = new Blogposts(JSON.parse(request.body));
		await newPost.save();
		return response
			.status(200)
			.json({message: `Blogpost ${result.insertedID} got saved to the db.`});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
