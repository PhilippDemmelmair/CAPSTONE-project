import FileSaver from 'file-saver';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/Layout';

export default function AboutPage() {
	const saveCV = () => {
		FileSaver.saveAs(
			process.env.REACT_APP_CLIENT_URL + '/files/PhilippDemmelmairCV.pdf',
			'PhilippDemmelmairCV.pdf'
		);
	};
	return (
		<Layout>
			<Helmet>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Helmet>
			<Card>
				<Title>Philipp Demmelmair</Title>
				<Job>
					I am currently: <Highlight>#lookingForAJob</Highlight>
				</Job>
			</Card>
			<Card>
				<Title>Contacts:</Title>
				<List>
					<Item>LinkedIn: @PhilippDemmelmair</Item>
					<Item>E-Mail: donsilver24@gmail.com</Item>
					<Item>Github: /PhilippDemmelmair</Item>
					<Item>Tel: 0157 / 388 301 84</Item>
					<Item>Adresse: Fritz-Fritsche-Str 49, 09123 Chemnitz</Item>
				</List>
			</Card>
			<Card>
				<Title>Werdegang:</Title>
				<Text>
					Ich besitze eine Ausbildung als Biologisch-technischer Assistent, die
					Fachhochschulreife und bald auch ein Zertifikat als Software-Entwickler.
				</Text>
				<Title>Letzte Positionen:</Title>
				<Text>
					<InnerTitle>FRONTEND WEBDEVELOPER:</InnerTitle>
					<Data>Bootcamp bei neueFische - Apr `22 - Jul `22</Data>
					<Position>
						I took the chance to enhance my preexisting IT-Skills in this boot camp. In
						the boot camp I learned ReactJS, GitHub, agile working, the fundamentals of
						scrum, how to write user stories and much more. It was a tough, but also
						very rewarding experience.
					</Position>
				</Text>

				<Text>
					<InnerTitle>SELFEMPLOYMENT:</InnerTitle>
					<Data>Handcrafted Shops May 2020 - current</Data>
					<Position>
						In the beginning of Covid, my previous job was sized down to a mini-job and
						I took the chance to get self-employed. I mostly did troubleshooting in
						existing shops, set up a few minor design changes, installed and updated
						Shopware 5 Shops for my customers.
					</Position>
				</Text>
				<Text>
					<InnerTitle>E-COMMERCE EMPLOYEE:</InnerTitle>
					<Data>BN-Pipes GmbH Sep 16 - current</Data>
					<Position>
						In this position, I administered and maintained the online shop of the
						company. I was mostly responsibly for administration, some minor design
						changes, fixing bugs and everything IT related in the company.
					</Position>
				</Text>
				<CV onClick={saveCV}>Get my CV</CV>
			</Card>
		</Layout>
	);
}

const Card = styled.article`
	margin: 2%;
	padding: 2%;
	border: 1px solid #1f1f1f;
	border-radius: 8px;
`;

const Title = styled.h1`
	color: #f1f1f1;
	text-align: center;
`;

const Job = styled.h2`
	color: #f1f1f1;
	text-align: center;
`;

const Highlight = styled.h2`
	color: #f1f1f1;
	text-align: center;
`;

const Text = styled.p`
	color: #f1f1f1;
	text-align: justify;
`;
const InnerTitle = styled.h3`
	color: #f1f1f1;
	font-weight: 300;
	text-align: center;
	text-decoration: underline;
`;

const Data = styled.p`
	color: #a3a3a3;
	text-align: justify;
`;

const Position = styled.p`
	color: #f1f1f1;
	text-align: justify;
`;

const List = styled.ul`
	color: #f1f1f1;
	text-align: center;
`;

const Item = styled.li``;

const CV = styled.a`
	display: block;
	width: 40%;
	margin: 0 auto;
	padding: 5%;
	border: 1px solid #000;
	border-radius: 8px;
	background: green;
	color: #f1f1f1;
	font-weight: bold;
	text-align: center;
`;
