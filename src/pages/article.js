import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

export default function Article() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Article title goes here!</title>
				<meta key="description" name="description" content="This is an article about... " />
			</Helmet>
			<h1>Something will go here. </h1>
		</Layout>
	);
}
