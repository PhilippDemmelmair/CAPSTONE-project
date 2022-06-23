import styled from 'styled-components';

export default function BlogTeaser() {
	return (
		<>
			<Teaser>
				<Title>Title ...</Title>
				<Author>von : author</Author>
				<Published>veröffentlicht am: published</Published>
				<TeaserText>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
					vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
					no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
					amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
					labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
					et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
					sanctus est Lorem ipsum dolor sit amet.
				</TeaserText>
				<ReadMore>Read More</ReadMore>
			</Teaser>
		</>
	);
}

const Teaser = styled.article`
	margin: 2vw;
	border: 1px solid #30363d;
	border-radius: 8px;
	background: #0d1117;
`;

const Title = styled.h2`
	padding: 2vw;
	margin: 1vw 0;
	color: #c9d1d9;
	border-bottom: 1px solid #30363d;
`;

const Author = styled.p`
	background: #30363d;
	border-radius: 4px;
	border: 1px solid #747d85;
	padding: 1vw;
	margin: 5vw;
	color: #c9d1d9;
`;

const Published = styled.p`
	background: #30363d;
	border-radius: 4px;
	border: 1px solid #747d85;
	padding: 1vw;
	margin: 5vw;
	color: #c9d1d9;
`;

const TeaserText = styled.p`
	margin: 2vw 7.5vw;
	color: #c9d1d9;
	text-align: justify;
	-webkit-mask-image: linear-gradient(180deg, #000 20%, transparent);
`;

const ReadMore = styled.p`
	width: 40vw;
	margin: 4vw auto;
	padding: 10px 20px;
	background: #0E5838;
	border-radius: 24px;
	border: 1px: solid #111218;
	color: #c9d1d9;
	font-weight: 700;
	text-align: center;
`;
