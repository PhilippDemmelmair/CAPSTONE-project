import {useState} from 'react';
import {Helmet} from 'react-helmet';

import BlogTeaser from '../components/blogposts/BlogTeaser';
import Layout from '../components/Layout';
import useFetch from '../hooks/useFetch';

export default function HomePage() {
	const {data, error, loading} = useFetch('api/teaser');
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
