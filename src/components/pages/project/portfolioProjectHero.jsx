import React from 'react';
import Link from '../../style_guide/link';
import HeroImage from '../general_sections/heroImage';

export default function PortfolioProjectHero({pageTitle, projectProblem}){
	return (
		<div className="">
			<div className="hero-container">
				<Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true}/>
				<div className="project-heading-container">
					<div className="heading-lead">{pageTitle}</div>
					<p className="body-large">{projectProblem}</p>
				</div>
				</div>
			<HeroImage></HeroImage>
		</div>
	)
}