import React from 'react';
import Link from '../../style_guide/link';
import Image from '../general_sections/image';

export default function PortfolioProjectHero({pageTitle, projectProblem}){
	return (
		<div className="project-hero-container">
			<div className="hero-container">
				<Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true}/>
				<div className="project-heading-container">
					<div className="heading-lead">{pageTitle}</div>
					<p className="body-large">{projectProblem}</p>
				</div>
			</div>
			<Image></Image>
		</div>
	)
}