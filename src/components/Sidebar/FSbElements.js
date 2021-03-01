import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
	background:  linear-gradient(rgb(30, 18, 104)10%, rgba(25, 23, 36)50%);
	display: grid;
	opacity: 9%;
	flex-direction: column;
	height: 100vh;
	width:20rem;
	align-items: center;
	justify-content: center;
	position:fixed;
	z-index: 999;
	padding: 0rem 2rem;
	left: 0;
	top: 80px;
	transition: all 0.8s ease-in-out;	
	
	
	@media screen and (max-width: 1128px){
		display: block;
	}


	@media screen and (max-width: 986px){
		display: none;
	}

	@media screen and (max-width: 768px){
		display: none;

	}

	@media screen and (max-width: 600px){
		display: none;

	}

	

`

export const Icon = styled.div`
	font-size: 2rem;
	top: 1.8rem;
	right: 2rem;
	position: absolute;
	background: transparent;
	outline: none;
	display: none;
`

export const ClosedIcon = styled(FaTimes)`
	color: #fff;
	cursor: pointer;
`
export const SideImgCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #242424;
	border-radius: 50%
	width: 1rem;
	height: 1rem;
	padding: 7rem 2rem;
	border-radius: 50%;
	background: transparent;

	&:hover{
		transition: all 0.8s ease-in-out;
		background: #131B68;
		border: 3px solid #1724A2;
	}
`

export const Sideimg = styled.img`
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
	border: 5px solid rgba(255,255,255,0.5);
	cursor: pointer;
	&:hover{
		transition: all 0.9s ease-in-out;
		border: 5px solid rgba(36, 128, 7, 0.8);
	}
`

export const SidebarWrapper = styled.div`
	
	
`

export const SidebarMenu = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem 0;
	height: 100%;
	align-items: center;
	text-align: center;
	text-transform: uppercase;
	margin: 2rem 0;

	

`

export const SidebarSLink = styled(LinkS)`
	display: flex;
	text-align: center;
	padding: 1rem 0;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	list-style: none;
	color: #fff;
	font-size: 1.2rem;
	font-family: 'Dancing Script', cursive;
	transition: 0.2s ease-in-out;
	
	&.active{
		color: #ffd700;
		border-bottom: 2px solid #fff;
	}

	
	&:hover{
		color: #ffd700;
		transition: 0.8s ease-in-out;
		cursor: pointer;
	}
`

export const SidebarBtnWrap = styled.div`
	display: flex;
	justify-content: center;
	display: none;
`

export const SidebarBtnRLink = styled(LinkS)`
	border-radius: 50px;
	text-decoration: none;
	background: rgba(18,37,154,0.8);
	color: #fff;
	padding: 8px 24px;
	font-size: 13px;
	white-space: nowhite;
	outline: none;
	border:none;
	cursor: pointer;

&:hover{
	background: rgba(18,27,30,0.8);
	color: #ffd700;
	transition: all 0.8s ease-in-out;
}

`