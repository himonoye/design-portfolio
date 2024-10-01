import React from 'react';
import Link from '../../style_guide/link';
import Image from '../../style_guide/image';

type PortfolioProjectHeroProps = {
	pageTitle: string;
	projectProblem: string;
	projectCoverImgUrl: string;
}

export default function PortfolioProjectHero({pageTitle, projectProblem, projectCoverImgUrl}: PortfolioProjectHeroProps){
	return (
		<div className="hero-container">
				<Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true} hasRightIcon={false}/>
				<div className="project-heading-container">
					<div className="heading-lead">{pageTitle}</div>
					<p className="body-large">{projectProblem}</p>
				</div>
				<Image url={projectCoverImgUrl}></Image>
			</div>		
	)
}