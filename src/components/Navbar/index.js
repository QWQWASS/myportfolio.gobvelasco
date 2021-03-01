import React, {useState, useEffect} from 'react';
import {Nav, FAYinYang, NavbarContainer, NavbarLogo, 
		MobileIcon, 
		NavBtn, NavRLinkMes, ProgressMainWrapper, ProgressMainStyle, } from './NbElements';


const Navbar = ({toggle,scrollTop,scroollTops, isOpen, toggleHome }) => {
	
	const [scrollNav, setScrollNav] = useState(false);
	
	const changeNav = (params) => {
		if(window.scrollY >= 600){
			setScrollNav(true);
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		return (window.addEventListener('scroll', changeNav))
	}, [])

	
	return (
		<>

			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavbarLogo to="/" onClick={toggleHome}>
						 G<FAYinYang />
						 BVelasco
					</NavbarLogo>

					<MobileIcon onClick={toggle}>
						<i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}/>
					</MobileIcon>

					
					<NavBtn>
						 <NavRLinkMes to="message-me" smooth={true} spy={true} exact='true' duration={500} offset={-10}>Message Me</NavRLinkMes>
					</NavBtn>

				</NavbarContainer>
			</Nav>
			<ProgressMainWrapper>
					<ProgressMainStyle style={{width: `${scrollTop}%`}}></ProgressMainStyle>
				</ProgressMainWrapper>
		</>
	)
}

export default Navbar;