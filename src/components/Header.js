import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import headerImg from './header.png';

export default function Header() {
	const [isMenuOpen, setisMenuOpen] = useState(false);
	function toggleisMenuOpen() {
		setisMenuOpen(!isMenuOpen);
	}

	return (
		<header>
			<Navigation>
				<Link to="/">
					<Logo src={headerImg}></Logo>
				</Link>
				<DropDown>
					<MenuWrapper>
						<Menu>Navigation</Menu>
						<Down onClick={toggleisMenuOpen}>Down</Down>
					</MenuWrapper>

					{isMenuOpen && (
						<>
							<NavElement>
								<Link to="/" style={{textDecoration: 'none', color: 'white'}}>
									Home
								</Link>
							</NavElement>
							<NavElement>
								<Link to="/about" style={{textDecoration: 'none', color: 'white'}}>
									About me
								</Link>
							</NavElement>
						</>
					)}
				</DropDown>
			</Navigation>
		</header>
	);
}

const Navigation = styled.nav``;

const DropDown = styled.article`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	width: 60vw;
	margin: 0 auto;
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

const Logo = styled.img`
	width: 100%;
`;
