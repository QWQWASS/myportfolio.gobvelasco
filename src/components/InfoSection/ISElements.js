import styled from 'styled-components';
import {FcCheckmark} from 'react-icons/fc';

export const FFcCheckmark = styled(FcCheckmark)`
	margin-right: 2rem;
`
export const ISContainer = styled.div`
	width: 100%;
	color: #242424;
	background: #fff;
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const ISWrapper = styled.div`
	position: relative;
	left: 20rem;
	width: 70%;
	height: 90vh;
	background: #fff;
	top: 0;
	padding: 5rem 3rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	
	@media screen and (max-width: 1128px){
		left: 20rem;
		width: 65%;
	}

	@media screen and (max-width: 986px){
		left: 0;
		width: 100%;
	}

	@media screen and (max-width: 768px){
		
		width: 100%;
		position: relative;
		left: 0;
	}

	@media screen and (max-width: 600px){
		
		width: 100%;
		position:relative;
		left:0;

	}
	@media screen and (max-width: 400px){
		padding: 3rem 0rem;

	}

	@media only screen and (min-width: 400px){
		height: 40rem;
		padding: 1rem 0rem;
	}

`

export const ISRow = styled.div`
	background: #fff;
	height: 1000vh;
	width: 100%;
	padding:  1rem 2rem;
	position: relative;
	top: 65px;
	z-index:99;
	display: block;
	flex-direction: column;


	@media screen and (max-width: 600px){
		top: 60px;

	}

`
export const ISSRow = styled.div`
	background: #fff;
	height: 1000vh;
	width: 100%;
	padding: 1rem 2rem;
	position: relative;
	top: -9px;

	@media screen and (max-width: 600px){
		top: -31px;
	}
`

export const ISSWrapper = styled.div``



export const H3ETitles = styled.h3`
	font-size:25px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 20px;

	@media screen and (max-width: 600px){
		font-size: 20px;
		margin-bottom: 20px;
	}
`

export const H1STETitles = styled.h1`
	font-size: 1.2rem;
	font-weight: 700;
	margin-bottom: 2.5rem;
	margin-top: 20px;

	@media screen and (max-width: 600px){
		font-size: 19px;
		margin-top: 20px;

	}
`
export const Eli = styled.li`
	margin-left:2rem;
	padding: 5px;
	list-style: square;
	justify-content: space-between;
	font-size: 20px;

	@media screen and (max-width: 600px){
		font-size: 1rem;
	}
`

export const PE = styled.p``

export const ISAboutName = styled.h1`
	font-size: 4rem;
	margin-top: 20px;
	margin-bottom: 3rem;
	letter-spacing: 0.2rem;
	font-weight: 600;
	text-transform: uppercase;


	@media screen and (max-width: 600px){
		font-size: 2rem;
		margin-top: 10px;
		margin-bottom: 2rem;
	}
`

export const AH1 = styled.h1`
	font-size:1rem;
	top: -40px;
	line-height: 1.5;
	font-weight: 700;
	position: relative;
	margin-bottom: 2.5rem;

	@media screen and (max-width: 600px){
		position: relative;
		top: -25px;
		font-size: 0.8rem;
		letter-spacing: 1px;
		margin-bottom: 2.5rem;
	}
`

export const AP = styled.p`
	font-size: 20px;
	line-height:1.5;
	font-weight: 500;

	@media screen and (max-width: 600px){
		font-size: 1rem;
	}

`
export const H1Titles = styled.h1`
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 2.5rem;
	margin-top: 20px;

	@media screen and (max-width: 600px){
		font-size: 2rem;
		margin-bottom: 2rem;
		margin-top: 20px;
	}
`

export const SPLContainer = styled.div`
	display: flex;
	align-items:center;
	justify-content: space-between;
	width: 100%;
	max-width: 30vw;
	font-size: 3rem;
	color: red;
	position:relative;
	left: 5rem;
	margin: 1.5rem 0rem 2rem;

	@media screen and (max-width: 600px){
		font-size: 2rem;
		color: red;
		max-width: 40vw;
		position: relative;
		left: 2.5rem;

	}
`

export const SH1 = styled.h1``

export const SP = styled.p``

export const SUL = styled.ul`
	
`

export const SLI = styled.li`
	list-style: none;
	font-size: 1.5rem;
	margin-left: 2rem;

	@media screen and (max-width: 600px){
		margin-left: 2.5rem;
		font-size: 1rem;
	}
`

export const IP = styled.p`
	margin-bottom: 2rem;
	font-size: 20px;
	letter-spacing:1px;
	font-weight: 500;


	@media screen and (max-width: 600px){
		margin-bottom: 2rem;
		font-size: 1rem;
	}
`

export const EH1 = styled.h1``

export const EP = styled.p``

export const EDH1 = styled.h1`
	text-transform: uppercase;
	font-weight: 600;
	font-size: 2rem;

	@media screen and (max-width: 600px){
		font-size: 20px;
	}
`

export const EDP = styled.p`
	font-size: 18px;
	font-weight: 500;
	margin-bottom: 0.1rem;

	@media screen and (max-width: 600px){
		font-size: 15px;
		font-weight: 700;
		line-height: 1.5;
	}
`

export const EDH2 = styled.h2`
	font-size: 15px;
	margin-top: 2rem;
	font-weight: 700;

	@media screen and (max-width: 600px){
		font-size: 14px;
	}
`