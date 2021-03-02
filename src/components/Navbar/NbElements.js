import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

import {FaTimes, FaYinYang} from 'react-icons/fa';
export const Nav = styled.nav`
		/**/
	background: ${({scrollNav}) => (scrollNav ? 'linear-gradient(to right top ,rgb(30, 18, 104 )10%, rgb(25, 23, 36)50%)' : 'transparent')};
	height: 80px;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	font-size: 2rem;
	position: sticky;
	z-index: 9999;
	top: 0;
	transition: all 0.3s ease-in-out;
	@media screen and (max-width: 980px){
		transition: all 0.8s ease;
		background: linear-gradient(to right top ,rgb(30, 18, 104 )10%, rgb(25, 23, 36)50%);
	}
`

export const NavbarContainer = styled.div`
	height: 80px;
	max-width: 1400px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	padding: 0rem 1.3rem;
`
export const FAYinYang = styled(FaYinYang)`
	font-size: 1.8rem;

`
export const NavbarLogo = styled(LinkS)`
	cursor: pointer;
	color: #fff;
	text-decoration: none;
	font-size: 1.8rem;
	justify-self: flex-start;
	display: flex;
	align-items: center;
	text-align: center;
	font-family: 'Dancing Script', cursive;
	&:hover{
		transition: all 0.8s ease;
		color: #ffd700;
	}
	
`

export const MobileIcon = styled.div`
	color: #fff;
	font-size: 2rem;
	display: none;




		@media screen and (max-width: 986px){
		display: block;
		top: 0;
		right: 0;
		position: absolute;
		transform: translate(-100%, 37%);
		cursor: pointer;
	}


	&:hover{
		color: #ffd700;
		transition: all 0.9s ease-in;
	}


`
export const Icon = styled.div`
	font-size: 2rem;
	top: 1.8rem;
	right: 1.5rem;
	position: absolute;
	background: transparent;
	outline: none;
	
`

export const ClosedIcon = styled(FaTimes)`
	display: block;
	color: #fff;
	cursor: pointer;

	&:hover{
		color: #ffd700;
		transition: all 0.9s ease-in;
	}
`

export const NavbarMenu = styled.ul`
	display: flex;
	list-style:none;
	text-align: center;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 0.7rem;
	

	@media screen and (max-width: 768px){
		display: none;
	}
	
`

export const NavbarItem = styled.li`
	height: 80px;
`

export const NavbarSLink = styled(LinkS)`
	height: 100%;
	display: flex;
	justify-content:center;
	align-items: center;
	text-align: center;
	padding: 0 2rem;
	text-decoration: none;
	cursor: pointer;
	font-weight: 500;
	&:hover{
		transition: all 0.7s ease;
		border-bottom: 3px solid rgba(21, 87, 90, 0.6);;
		color: #ffd700;
	}
`

export const NavBtn = styled.div`
		display: flex;
		font-size: 1rem;
		text-align: center;

		@media screen and (max-width: 768px){
			display: none;
		}

		@media screen and (max-width: 986px){
			display: none;
		}
	`

export const NavRLinkMes = styled(LinkS)`
	color: #fff;
	text-decoration: none;
	border-radius: 20px;
	outline: none;
	border: none;
	text-align: center;
	padding: 8px 24px;
	font-size: 13px;
	background: rgba(18, 37, 154 ,0.4);
font-family: 'Dancing Script', cursive;
	&.active{
	background: rgba(21,87,90,0.6);
	color: #ffd700;
}
	&:hover{
	transition: all 0.8s ease-in-out;
		color: #ffd700;
		background: rgba(21, 87, 90, 0.6);
		white-space: nowrap;
		cursor: pointer;
	}
`

export const ProgressMainWrapper = styled.div`
	background:transparent;
	position: sticky;
	
	z-index: 1000;
	left: 0;
	top: 80px;
	width: 100%;
`

export const ProgressMainStyle = styled.div`
	background: #01AF2F;
	opacity: 100%;
	height: 2px;
	top: 0;
	left: 0;
	position: absolute;
	
`