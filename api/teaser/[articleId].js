import connectToMongodb from '../../backend/db/connect';
import Blogposts from '../../backend/models/Blogposts';

export default async function handler(request, response) {
	await connectToMongodb();

	const {articleId} = request.query;
	const post = await Blogposts.findById(articleId);

	switch (request.method) {
		case 'GET': {
			return response.status(200).json({data: post});
		}
	}
	return response.status(403).json({message: 'Error: You shall not pass!'});
}
