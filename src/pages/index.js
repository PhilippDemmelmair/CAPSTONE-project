import {Helmet} from 'react-helmet';

import BlogTeaser from '../components/blogposts/BlogTeaser';
import Layout from '../components/Layout';
import useFetch from '../hooks/useFetch';

export default function HomePage() {
	const {data, error} = useFetch('api/teaser');
	if (data) {
		return (
			<Layout>
				<Helmet>
					<title key="title">My Blog</title>
					<meta key="description" name="description" content="This is my blog" />
				</Helmet>
				{data.data.map(teaser => {
					// console.log(teaser.title);
					// console.log(teaser.author);
					console.log(teaser.published.$timestamp);
					return (
						<BlogTeaser
							key={teaser._id}
							title={teaser.title}
							author={teaser.author}
							published={teaser.published.$timestamp}
							text={teaser.text}
						/>
					);
				})}

				{/* <BlogTeaser />
				<BlogTeaser />
				<BlogTeaser />
				<BlogTeaser /> */}
			</Layout>
		);
	} else if (error) {
		<h1>Something went wrong, we are onto that!</h1>;
	}
}
