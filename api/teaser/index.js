import connectToMongodb from '../../backend/db/connect';
import Blogposts from '../../backend/models/Blogposts';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		const posts = await Blogposts.find({});
		return response.status(200).json({data: posts});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
