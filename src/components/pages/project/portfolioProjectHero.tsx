import React from 'react';
import Link from '../../style_guide/link';
import Image from '../../style_guide/image';
import Button from '../../style_guide/button';

type PortfolioProjectHeroProps = {
	pageTitle: string;
	pageDescription: string;
	projectDuration: string;
	projectRole: string;
	projectCoverImgUrl: string;
	buttonGroup: [];
}

export default function PortfolioProjectHero({pageTitle, pageDescription, projectDuration, projectRole, projectCoverImgUrl, buttonGroup}: PortfolioProjectHeroProps){
	return (
		<div className="hero-container">
				<Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true} hasRightIcon={false}/>
				<div className="project-hero-container">
					<div className="project-hero-heading-container">
						<div className="heading-brow">{pageTitle}</div>
						<div className="heading-head">{pageDescription}</div>
					</div>
					<div className="project-hero-overview-container">
						<div className="project-hero-overview-heading-container">
							<div className="heading-brow">My Role</div>
							<div className="heading-flag">{projectRole}</div>
						</div>
						<div className="project-hero-overview-heading-container">
							<div className="heading-brow">Timeline</div>
							<div className="heading-flag">{projectDuration}</div>
						</div>
					</div>
				</div>
				<Image url={projectCoverImgUrl} needsOverlay={false}></Image>
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
	)
}