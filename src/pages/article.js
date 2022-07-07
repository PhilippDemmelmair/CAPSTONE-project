import {Helmet} from 'react-helmet';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../components/Layout';
import useFetch from '../hooks/useFetch';

function showPost(data) {
	return (
		<>
			<Title>{data.title}</Title>
			<Author>von : {data.author}</Author>
			<Published>veröffentlicht am: </Published>
			<Text>{data.text}</Text>
		</>
	);
}

export default function Article() {
	const id = useParams();
	const {data, error} = useFetch(`api/teaser/${id.articleId}`);
	return (
		<Layout>
			<Helmet>
				<title key="title">Article title goes here!</title>
				<meta key="description" name="description" content="This is an article about... " />
			</Helmet>
			{error && <ErrorMessage>Something went wrong, we are onto that!</ErrorMessage>}
			{data && showPost(data.data)}

			{/*  */}
		</Layout>
	);
}

const ErrorMessage = styled.p`
	color: tomato;
`;

const Title = styled.h2`
	margin: 1vw 0;
	padding: 2vw;
	border-bottom: 1px solid #30363d;
	color: #c9d1d9;
`;

const Author = styled.p`
	margin: 5vw;
	padding: 1vw;
	border: 1px solid #747d85;
	border-radius: 4px;
	background: #30363d;
	color: #c9d1d9;
`;

const Published = styled.p`
	margin: 5vw;
	padding: 1vw;
	border: 1px solid #747d85;
	border-radius: 4px;
	background: #30363d;
	color: #c9d1d9;
`;

const Text = styled.p`
	margin: 2vw 7.5vw;
	color: #c9d1d9;
	text-align: justify;
`;
