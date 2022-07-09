import {useState} from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/Layout';

export default function AdminPage() {
	const [post, setPost] = useState({title: '', author: 'Philipp Demmelmair', text: ''});

	async function addPost(post) {
		await fetch('api/teaser', {
			method: 'POST',
			body: JSON.stringify(post),
		}).then(response => {
			if (!response.ok) {
				return response.statusText;
			} else {
				return response.message;
			}
		});
	}
	return (
		<Layout>
			<Helmet>
				<title key="title">Admin</title>
				<meta key="description" name="description" content="Admin Dashboard" />
			</Helmet>
			<ViewWidget>
				Views <br></br>Here will be displayed, how much views the blog got;
			</ViewWidget>
			<NewPost>
				<BlogPostEntry
					onSubmit={event => {
						event.preventDefault();
						if (post.title.length > 3) {
							if (post.text.length > 100) {
								addPost(post);
								setPost({...post, title: '', text: ''});
							} else {
								alert('Der Text des Posts muss mindestens 100 Zeichen lang sein.');
							}
						} else {
							alert('Der Titiel muss mindestens zehn Zeichen lang sein.');
						}
					}}
				>
					<TitleLabel htmlFor="input-title">Title:</TitleLabel>
					<TitleInput
						id="input-title"
						type="text"
						value={post.title}
						onChange={event => setPost({...post, title: event.target.value})}
					/>
					<PostLabel htmlFor="input-text">Text:</PostLabel>
					<PostInput
						id="input-text"
						type="textarea"
						rows={27}
						value={post.text}
						onChange={event => setPost({...post, text: event.target.value})}
					/>
					<SaveButton>Save</SaveButton>
				</BlogPostEntry>
			</NewPost>
			<Comments>
				Comments<br></br>Here will be the section, where you can approve or dissmiss a
				comment
			</Comments>
		</Layout>
	);
}

const ViewWidget = styled.article`
	height: 200px;
	margin: 2%;
	border: 1px solid white;
	color: white;
`;

const NewPost = styled.article`
	height: 600px;
	margin: 2%;
	border: 1px solid white;
	color: white;
`;

const Comments = styled.article`
	height: 400px;
	margin: 2%;
	border: 1px solid white;
	color: white;
`;

const BlogPostEntry = styled.form``;

const TitleLabel = styled.label`
	display: block;
	width: 40%;
	margin: 2% auto;
	padding: 1%;
	border-radius: 8px;
	background: #0496ff;
	font-size: 1.3rem;
	text-align: center;
`;

const TitleInput = styled.input`
	width: 98%;
	margin: 1% 1%;
`;

const PostLabel = styled.label`
	display: block;
	width: 40%;
	margin: 2% auto;
	padding: 1%;
	border-radius: 8px;
	background: #0496ff;
	font-size: 1.3rem;
	text-align: center;
`;

const PostInput = styled.textarea`
	width: 98%;
	margin: 1% 1%;
`;

const SaveButton = styled.button`
	display: block;
	width: 90%;
	margin: 2% auto;
	padding: 2%;
	border: none;
	border-radius: 8px;
	background: #006ba6;
	color: white;
	font-size: 1.3rem;
	text-align: center;
`;
