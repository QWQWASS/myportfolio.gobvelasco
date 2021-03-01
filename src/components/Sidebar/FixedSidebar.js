import React from 'react';
import {SidebarContainer, Icon, ClosedIcon,
		SidebarWrapper, SidebarMenu, SidebarSLink,
		SidebarBtnWrap, SidebarBtnRLink, SideImgCont, Sideimg} from './FSbElements';
import MyPhoto from '../../assets/images/img-1.jpg';


const FixedSidebar = ({scroollTops}) => {
	return (
		<>
			<SidebarContainer style={{opacity: `${scroollTops}%`,overflow:'auto'}}>
				<Icon>
					<ClosedIcon/>
				</Icon>

				<SidebarWrapper>
					<SideImgCont>
						<Sideimg src={MyPhoto} alt="img-ko"/>
					</SideImgCont>
					<SidebarMenu  >
						<SidebarSLink to="about" smooth={true} spy={true} exact='true' duration={500} offset={-80}>About</SidebarSLink>
						<SidebarSLink to="skills" smooth={true} spy={true} exact='true' duration={500} offset={-80} >Skills</SidebarSLink>
						<SidebarSLink to="interests"smooth={true} spy={true} exact='true' duration={500} offset={-80}>Interests</SidebarSLink>
						<SidebarSLink to="experiences"smooth={true} spy={true} exact='true' duration={500} offset={-80}>Experiences</SidebarSLink>
						<SidebarSLink to="educ"smooth={true} spy={true} exact='true' duration={500} offset={-80}>Education</SidebarSLink>
					
						<SidebarBtnWrap>
							<SidebarBtnRLink to="message-me">Message Me</SidebarBtnRLink>
						</SidebarBtnWrap>
					</SidebarMenu>

					
				</SidebarWrapper>

			</SidebarContainer>
		</>
	)
}

export default FixedSidebar;