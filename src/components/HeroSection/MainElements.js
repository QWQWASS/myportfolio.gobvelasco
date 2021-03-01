import styled from 'styled-components';

export const MainContainer = styled.div`	
	background: #242424;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 800px;
	width: 100%;
	padding: 0 30px;
	position: relative;
	z-index: 100;
	overflow: hidden;
	margin-top: -80px;
	object-fit: contain;


	@media screen and (max-width: 400px){
		height: 650px;
	}

`
export const MainBg = styled.div`
	overflow: hidden;
	top: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	position: absolute;
	left: 9rem;
	margin-left: auto;
	@media screen and (max-width: 768px){
		left: 0;
		
	}

	@media screen and (max-width: 480px){
		width: 100%;
	}


`

export const VideoBg = styled.video`
overflow: hidden;
z-index: 1;
width: 100%;
height: 100%;

object-fit: cover; 
-o-object-fit: cover;

`

export const HTagContent = styled.div`
	z-index: 1;
	max-width: 1100px;
	width: 100%;
	color: #fff;
	padding: 10px 25px;
	display: flex;
	position: absolute;
	top: 25%;
	flex-direction: column;
	align-items: center;
	text-align:center;
	

	@media screen and (max-width: 768px){
		position: absolute;
		top: 25%;
		padding: auto;
		margin: auto;
		transform: none;
	}
`

export const HTagH1 = styled.h1`
	font-size: 3rem;
	padding-bottom: 40px;
	font-family: 'Dancing Script', cursive;
	@media screen and (max-width: 768px){
		font-size: 1.7rem;
			padding-bottom: 20px;
	}

	@media screen and (max-width: 400px){
		font-size: 1.5rem;

	}
`

export const HTagP = styled.p`
	font-family: 'Dancing Script', cursive;
	font-size: 25px;
`



