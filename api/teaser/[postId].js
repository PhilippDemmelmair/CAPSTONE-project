import connectToMongodb from '../../backend/db/connect';
import Blogposts from '../../backend/models/Blogposts';

export default async function handler(request, response) {
	await connectToMongodb();
	const {postId} = request.query;

	switch (request.method) {
		case 'GET': {
			const post = await Blogposts.findById(postId);
			return response.status(200).json({data: post});
		}
	}
	return response.status(403).json({message: 'Error: You shall not pass!'});
}
