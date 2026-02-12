import React from 'react';
import LinkComponent from '../../style_guide/link';
import Image from '../../style_guide/image';
import Button from '../../style_guide/button';

type PortfolioProjectHeroProps = {
	pageTitle: string;
	pageDescription: string;
	projectDuration: string;
	projectRole: string;
	projectCoverImgUrl: string;
	projectCoverAltTxt: string;
	buttonGroup: [];
}

export default function PortfolioProjectHero({pageTitle, pageDescription, projectDuration, projectRole, projectCoverImgUrl, projectCoverAltTxt, buttonGroup}: PortfolioProjectHeroProps){
	return (
		<div className="hero-container">
				<LinkComponent linkText="Back to Home" style="link-primary" url="/" hasLeftIcon={true} hasRightIcon={false}/>
				<div className="project-hero-container">
					<div className="project-hero-heading-container">
						<div className="heading-brow">{pageTitle}</div>
						<div className="heading-head">{pageDescription}</div>
					</div>
					<div className="project-hero-overview-container">
						<div className="project-hero-overview-heading-container">
							<div className="heading-label-left">My Role</div>
							<div className="heading-label-right">{projectRole}</div>
						</div>
						<div className="project-hero-overview-heading-container">
							<div className="heading-label-left">Timeline</div>
							<div className="heading-label-right">{projectDuration}</div>
						</div>
					</div>
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
				<Image url={projectCoverImgUrl} altTxt={projectCoverAltTxt} needsOverlay={false}></Image>
			</div>		
	)
}