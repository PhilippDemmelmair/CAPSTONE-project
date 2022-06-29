import connectToMongodb from '../../backend/db/connect';
import blogposts from '../../backend/models/blogposts';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		const posts = await blogposts.find({});
		return response.status(200).json({data: posts});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
