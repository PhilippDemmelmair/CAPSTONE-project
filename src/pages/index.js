import {Helmet} from 'react-helmet';

import BlogTeaser from '../components/blogposts/BlogTeaser';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Blog</title>
				<meta key="description" name="description" content="This is my blog" />
			</Helmet>
			<BlogTeaser />
			<BlogTeaser />
			<BlogTeaser />
			<BlogTeaser />
			<BlogTeaser />
		</Layout>
	);
}
