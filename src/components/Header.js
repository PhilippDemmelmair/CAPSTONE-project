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
	border: 1px solid white;
	border-radius: 8px;
	width: 60vw;
	margin: 0px auto;
`;

const Down = styled.p`
	color: white;
	font-size: 1rem;
	margin: auto 0;
	width: 100%;
	text-align: center;
`;

const Menu = styled.p`
	color: white;
	font-size: 2rem;
	margin: auto 0;
	padding: 0 2vw;
	border-right: 1px solid white;
`;
const Container = styled.section`
	border-top: 1px solid white;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	justify-content: inherit;
`;

const MenuWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
`;

const NavElement = styled.section`
	width: 90%;
	border: 1px solid white;
	border-radius: 8px;
	margin: 2% auto;
	padding: 2%;
	color: white;
	text-align: center;
`;

const HeaderImage = styled.img`
	width: 100%;
`;
