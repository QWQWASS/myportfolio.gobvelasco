import styled from 'styled-components';

export const InfoCont = styled.div`
	background:#fff;
	width: 100%;
	color: #242424;
	background: #fff;
	display: flex;

`

export const InfoWrap = styled.div`
	width: 100%;
	position: relative;
	left: 20rem;
	top: 0;
	right: 0;
	padding: 5rem 3rem;
	display: flex;
		
	flex-direction: column;
	max-width: 70rem;
	
	@media screen and (max-width:768px){
		position: relative;
		left: 0;
	}
	@media screen and (min-width: 768px){
		min-height:100vh;
		
	}
`



export const Row = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		
		position: relative;
		margin-bottom: 2rem;
`


export const THead = styled.h1`
margin-top: 0;
	font-size: 5rem;
	line-height: 1;
	text-transform: uppercase;
	width: 100%;
	font-weight: 700;
	margin-inline-start: 0;
	margin-inline-end: 0;
	@media screen and (max-width: 768px){
		font-size: 3rem;
		font-weight: 600;
	}
`

export const Topline = styled.h1`
margin-top: 0;
	font-size: 3.5rem;
	margin-bottom: 3rem;
	line-height: 1.2;
	font-weight: 700;
`

export const Heading = styled.p`
margin-top: 0;
text-transform: uppercase;
	font-weight: 500;
	font-size: 1rem;
	margin-bottom: 3rem;`

export const Subtitle = styled.p`
	margin-top: 0;
	font-weight: 400;
	font-size: 1.1rem;
	margin-bottom: 3rem;
`
