import React from 'react';
import {MainContainer, MainBg, VideoBg, HTagH1, HTagContent, HTagP} from './MainElements';
import Video from '../../assets/videos/Video-1.mp4'
const MainSection = () => {
	return (
		<>
			<MainContainer>
				<MainBg>
					<VideoBg  src={Video} playsInline='true' playinline='true'  autoPlay loop muted/>
				</MainBg>

				<HTagContent>
						<HTagH1>Welcome to my Simple Portfolio.</HTagH1>
						<HTagP>Feel free to visit and check my Portfolio Anytime.</HTagP>
				</HTagContent>
			</MainContainer>
		</>
	)
}

export default MainSection;