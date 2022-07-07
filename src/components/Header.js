import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import headerImg from './header.png';

export default function Header() {
	const [menu, setMenu] = useState(false);
	function toggleMenu() {
		setMenu(!menu);
		console.log(menu);
	}

	return (
		<header>
			<Navigation>
				<Home>
					<Link to="/">
						<HeaderImage src={headerImg}></HeaderImage>
					</Link>
				</Home>
				<DropDown>
					<MenuWrapper>
						<Menu>Navigation</Menu>
						<Down onClick={toggleMenu}>Down</Down>
					</MenuWrapper>

					{menu && (
						<Container>
							<NavElement>
								<Link to="/">Home</Link>
							</NavElement>
							<NavElement>
								<Link to="/about">About me</Link>
							</NavElement>
						</Container>
					)}
				</DropDown>
			</Navigation>
		</header>
	);
}

const Navigation = styled.nav``;

const Home = styled.div`
	margin: 2%;
	padding: 2%;
`;

const DropDown = styled.article`
	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;
	margin: 0 auto;
	width: 60vw;
	border: 1px solid white;
	border-radius: 8px;
`;

const Down = styled.p`
	width: 100%;
	margin: auto 0;
	color: white;
	font-size: 1rem;
	text-align: center;
`;

const Menu = styled.p`
	margin: auto 0;
	padding: 0 2vw;
	border-right: 1px solid white;
	color: white;
	font-size: 2rem;
`;
const Container = styled.section`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	justify-content: inherit;
	border-top: 1px solid white;
`;

const MenuWrapper = styled.section`
	display: flex;
	flex-flow: row nowrap;
	width: 100%;
`;

const NavElement = styled.section`
	width: 90%;
	margin: 2% auto;
	padding: 2%;
	border: 1px solid white;
	border-radius: 8px;
	color: white;
	text-align: center;
`;

const HeaderImage = styled.img`
	width: 100%;
`;
