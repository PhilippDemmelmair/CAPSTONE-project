import {Helmet} from 'react-helmet';
import styled from 'styled-components';

import BlogTeaser from '../components/blogposts/BlogTeaser';
import Layout from '../components/Layout';
import useFetch from '../hooks/useFetch';

export default function HomePage() {

	const [teaser, error] = useFetch('api/teaser');
	return (
		<Layout>
			<Helmet>
				<title key="title">My Blog</title>
				<meta key="description" name="description" content="This is my blog" />
			</Helmet>
			{error && <ErrorMessage>Something went wrong, we are onto that!</ErrorMessage>}
			{teaser &&
				teaser.data.map(teaser => {
					return (
						<BlogTeaser
							key={teaser._id}
							id={teaser._id}
							title={teaser.title}
							author={teaser.author}
							text={teaser.text}
						/>
					);
				})}
		</Layout>
	);
}

const ErrorMessage = styled.p`
	color: tomato;
`;
