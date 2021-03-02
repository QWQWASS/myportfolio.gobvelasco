import React from 'react';
import {SidebarContainer, 
		SidebarWrapper, SidebarMenu, SidebarSLink,
		SidebarBtnWrap, SidebarBtnRLink,} from './SbElements';


const Sidebar = ({isOpen, toggle}) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen}>
			{/*	<SbarLogo to="/" onClick={toggle}>
						 G<FAYinYang /> FAYinYang, SbarLogo
						 BVelasco
				</SbarLogo>*/}

				<SidebarWrapper>
					<SidebarMenu>
						<SidebarSLink to="about" onClick={toggle} smooth={true} spy={true} exact='true' duration={500} offset={-20}>About</SidebarSLink>
						<SidebarSLink to="skills" onClick={toggle}smooth={true} spy={true} exact='true' duration={500} offset={-20}>Skills</SidebarSLink>
						<SidebarSLink to="interests" onClick={toggle}smooth={true} spy={true} exact='true' duration={500} offset={-20}>Interests</SidebarSLink>
						<SidebarSLink to="experiences" onClick={toggle}smooth={true} spy={true} exact='true' duration={500} offset={-20}>Experiences</SidebarSLink>
						<SidebarSLink to="educ" onClick={toggle}smooth={true} spy={true} exact='true' duration={500} offset={-20}>Education</SidebarSLink>
					
						<SidebarBtnWrap>
							<SidebarBtnRLink to="message-me" onClick={toggle} smooth={true} spy={true} exact='true' duration={500} offset={-55}>Message Me</SidebarBtnRLink>
						</SidebarBtnWrap>
					</SidebarMenu>

					
				</SidebarWrapper>

			</SidebarContainer>
		</>
	)
}

export default Sidebar;