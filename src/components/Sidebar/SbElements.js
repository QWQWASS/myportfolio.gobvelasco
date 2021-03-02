import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const SidebarItem = styled.li``
export const SidebarContainer = styled.aside`
	background:  linear-gradient(to right bottom,rgb(30, 18, 104)10%, rgba(25, 23, 36)50%);
	display: flex;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 999;
	padding: 0rem 2rem;
	top: 0;
	left: 0;
	margin-top: 80px;
	transition: all 0.8s ease-in-out;
	opacity: ${({isOpen}) => (isOpen) ? '100%' : '0'};
	top: ${({isOpen}) => (isOpen) ? '0' : '-100%'};

`

/*export const FAYinYang = styled(FaYinYang)`
	font-size: 1.8rem;

`*/
export const SbarLogo = styled(LinkS)`
	cursor: pointer;
	color: #fff;
	text-decoration: none;
	font-size: 1.8rem;
	justify-self: flex-start;
	display: flex;
	align-items: center;
	text-align: center;
	top: 0;
	left: 0;
	position: absolute;
	transform: translate(11%, 43%);
	font-family: 'Dancing Script', cursive;
	@media screen and (max-width: 768px){
	display: block;
		top: 0;
		left: 0;
		position: absolute;
		transform: translate(15%, 63%);
		cursor: pointer;
	}

	&:hover{
		transition: all 0.8s ease;
		color: rgba(21, 87, 90, 0.6);
	}
	
`




export const SidebarWrapper = styled.div`
	margin-top: 1rem;
	top: 0px;
	position: relative;
	display:flex;
	align-items: center;
	justify-content:center;
`

export const SidebarMenu = styled.ul`
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	align-items: center;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 6rem;

	@media screen and (min-width: 600px){
		grid-template-rows: repeat(6, 35px);
	}

	
`

export const SidebarSLink = styled(LinkS)`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	list-style: none;
	color: #fff;
	font-size: 1.2rem;
	transition: 0.2s ease-in-out;
	font-family: 'Dancing Script', cursive;
	cursor: pointer;
	&:hover{
		color: #ffd700;
	}
	&.active{
		color: #ffd700;
		transition: 0.2s ease-in-out;
		border-bottom: 3px solid #fff;
		cursor: pointer;
	}
`

export const SidebarBtnWrap = styled.div`
	display: flex;
	justify-content: center;
	
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
	font-family: 'Dancing Script', cursive;
	&.active{
		background: rgba(21,87,90,0.6);
	color: #ffd700;
	}
&:hover{
	background: rgba(21,87,90,0.6);
	color: #ffd700;
	transition: all 0.8s ease-in-out;
	cursor: pointer;
}

`