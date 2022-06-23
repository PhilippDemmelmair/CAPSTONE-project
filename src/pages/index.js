import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Blog</title>
				<meta key="description" name="description" content="This is my blog" />
			</Helmet>
			<h1>This is where the cards will be displayed and something else</h1>
		</Layout>
	);
}
