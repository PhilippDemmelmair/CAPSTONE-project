import {Helmet} from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/Layout';

export default function AdminPage() {
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
				New Post<br></br>Here will be a form to create new posts;
			</NewPost>
			<Comments>
				Comments<br></br>Here will be the section, where you can approve or dissmiss a
				comment
			</Comments>
		</Layout>
	);
}

const NavBar = styled.nav`
	height: 50px;
	margin: 2%;
	border: 1px solid white;
	color: white;
`;

const ViewWidget = styled.article`
	height: 200px;
	margin: 2%;
	border: 1px solid white;
	color: white;
`;

const NewPost = styled.article`
	height: 600px;
    margin 2%;
    border: 1px solid white;
    color: white;

`;

const Comments = styled.article`
	height: 400px;
	margin: 2%;
	border: 1px solid white;
	color: white;
`;
