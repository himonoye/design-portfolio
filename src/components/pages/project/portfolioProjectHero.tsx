import React from 'react';
import Link from '../../style_guide/link';
import Image from '../../style_guide/image';
import Button from '../../style_guide/button';

type PortfolioProjectHeroProps = {
	pageTitle: string;
	projectProblem: string;
	projectCoverImgUrl: string;
	buttonGroup: [];
}

export default function PortfolioProjectHero({pageTitle, projectProblem, projectCoverImgUrl, buttonGroup}: PortfolioProjectHeroProps){
	return (
		<div className="hero-container">
				<Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true} hasRightIcon={false}/>
				<div className="project-hero-heading-container">
					<div className="heading-lead">{pageTitle}</div>
					<p className="body-large">{projectProblem}</p>
					{buttonGroup &&
							<div className="button-group">
									{buttonGroup.map((item:any,i)=>{
											return(
													<Button key = {i} style="button-primary" buttonText={item.buttonText} buttonType={item.buttonType} url={item.buttonUrl}/>
											)
									})}     
							</div>
          }
				</div>
				<Image url={projectCoverImgUrl}></Image>
			</div>		
	)
}