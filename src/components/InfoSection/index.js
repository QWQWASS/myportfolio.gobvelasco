import React from 'react';
import {DiHtml5, DiCss3, DiJavascript,DiReact,DiNpm} from 'react-icons/di';

import {ISContainer, ISWrapper, ISRow, FFcCheckmark,Eli,
		ISAboutName, AH1, AP,H1Titles, SPLContainer, 
		  SUL, SLI, IP, EDH1, EDP, EDH2 
		, H3ETitles, H1STETitles} from './ISElements';
const InfoSection = () => {
	return (
		<>
			<ISContainer>
				<ISWrapper id="about">
					<ISRow>
						<ISAboutName>
							Glenn Oliver Velasco
						</ISAboutName>

						<AH1>
							#3 Mazaraga St. Bgy Tatalon Quezon City , C#: +(639) 272185899 , Vglennoliver.study@gmail.com
						</AH1>

						<AP>
							To secure a position with a well established organization in the field of Computer Science where 
							I can utilize my knowledge and organizational skills, educational background, communication 
							skills and ability to work well with other people.
						</AP>
					</ISRow>
				</ISWrapper>

				<ISWrapper id="skills">
					<ISRow>
						<H1Titles>Skills</H1Titles>

						<H3ETitles>Programming Languages and Frameworks</H3ETitles>
						<SPLContainer>
							<DiHtml5 /> <DiCss3 /><DiJavascript/><DiReact/><DiNpm/>
						</SPLContainer>
						<H3ETitles>Workflow</H3ETitles>
							<SUL>
								<SLI><FFcCheckmark/>Mobile First Responsive Design</SLI>
								<SLI><FFcCheckmark/>Cross Browser Testing & Debugging</SLI>
							</SUL>
					</ISRow>
				</ISWrapper>

				<ISWrapper id="interests">
					<ISRow>
						<H1Titles>Interests</H1Titles>
						<IP>Apart from being aspiring web developer, I really enjoy most of my time being indoor, During my free time I'm enjoying to cook some dishes, watching motivational videos, watching web development tutorials, learning more about robotics "Internet of things", 
								And if I had small amount of free time I meditate for a while.	
						</IP>

						<IP>
							When I'm at the province, my other interests are petting my dogs, planting some trees or 
							flower  plants, and also changing the design of our stuff inside of the house.
						</IP>
					</ISRow>
				</ISWrapper>

				<ISWrapper id="experiences">
					<ISRow>
						
						<H1Titles>Experiences</H1Titles>

						<H3ETitles>Internship</H3ETitles>
						<H1STETitles>Department of Agriculture - Bureau of Soils and Water Management</H1STETitles>
						<ul>
							<Eli>Trouble Shooting</Eli>
							<Eli>Technical Support</Eli>
							<Eli>Computer Encoder</Eli>
							<Eli>Programmer</Eli>
						</ul>
						
					</ISRow>
				</ISWrapper>

				<ISWrapper id="educ">
					<ISRow>
						<H1Titles>Educational Background</H1Titles>
						<EDH1>University of the East</EDH1>
						<EDP>Bachelor of Science in Computer Science</EDP>
						<EDP>Web Development Track</EDP>
						<EDH2>June 2011 to January 2020 (4th Year Undergrad)</EDH2>
					</ISRow>
				</ISWrapper>
			</ISContainer>
		</>
	)
}

export default InfoSection