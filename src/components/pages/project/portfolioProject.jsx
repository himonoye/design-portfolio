import React from 'react';
import PortfolioProjectHero from './portfolioProjectHero';
import ThreeDots from '../../icons/threeDots';
import Link from '../../style_guide/link';
import BulletPoints from '../../style_guide/bulletPoints';
import Image from '../general_sections/image';

const InfoBlock = ({blockHeading, blockDescription, blockBulletPoints}) => {
	return (
		<div className="project-info-block">
			{blockHeading && <div className="heading-flag">{blockHeading}</div>}
			{blockDescription && <p className="body-base">{blockDescription}</p>}
			{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
		</div>
	)
}

const ProjectSection = ({sectionHeading, sectionDescription, infoBlocks}) => {
	return (
		<div className="project-section-container">
			<div className="project-heading-container">
				{sectionHeading && <div className="heading-sub">{sectionHeading}</div>}
				{sectionDescription && <p className="body-base">{sectionDescription}</p>}
			</div>
			<Image></Image>
			{infoBlocks && 
				<div className="project-info-block-container">
					{infoBlocks.map((item, i)=>{
							return (
								<InfoBlock key={i} blockHeading={item.blockHeading} blockDescription={item.blockDescription} blockBulletPoints={item.blockBulletPoints}></InfoBlock>
							)
					})}
				</div>
			}
			<ThreeDots className={"three-dots-horizontal"}/>
		</div>
	)
}

const ProjectSummary = ({projectImpact, myResponsibilities}) => {
	return (
		<div className="project-section-container">
			<div className="project-info-block-container">
				<div className="project-info-block">
					<div className="heading-sub">The Impact</div>
					<p className="body-base">{projectImpact}</p>
				</div>
				<div className="project-info-block">
					<div className="heading-sub">My Role & Responsibilities</div>
					<BulletPoints bulletPoints={myResponsibilities}/>
				</div>
			</div>
		</div>
	)
}

export default function PortfolioProject({projectData, nextProjectData, prevProjectData}) {
	return (
		<div className="body-container">
			<PortfolioProjectHero 
					pageTitle={projectData.projectName}
					projectProblem={projectData.projectProblem}
					projectImpact={projectData.projectImpact}
					myResponsibilities={projectData.myResponsibilities}
			></PortfolioProjectHero>

			<div className="content-container">
				<ProjectSummary projectImpact={projectData.projectImpact} myResponsibilities={projectData.myResponsibilities}/>
				<Image></Image>
				{projectData.understandingUsers &&
					<ProjectSection 
						sectionHeading={projectData.understandingUsers.sectionHeading}
						sectionDescription={projectData.understandingUsers.sectionDescription}
						infoBlocks={projectData.understandingUsers.infoBlocks}>
					</ProjectSection>
				}

				{projectData.startDesign &&
					<ProjectSection
						sectionHeading={projectData.startDesign.sectionHeading}
						sectionDescription={projectData.startDesign.sectionDescription}
						infoBlocks={projectData.startDesign.infoBlocks}>
					</ProjectSection>
				}

				{projectData.refineDesign && 
					<ProjectSection
					sectionHeading={projectData.refineDesign.sectionHeading}
					sectionDescription={projectData.refineDesign.sectionDescription}
					infoBlocks={projectData.refineDesign.infoBlocks}>
					</ProjectSection>
				}

				{projectData.takeaways &&
					<ProjectSection
					sectionHeading={projectData.takeaways.sectionHeading}
					sectionDescription={projectData.takeaways.sectionDescription}
					infoBlocks={projectData.takeaways.infoBlocks}>
					</ProjectSection>
				}
			</div>

			<div className="bottom-container">
					{
						prevProjectData && 
						<div className="project-navigation-prev">
							<Link linkText={"Previous"} style="link-primary" url={"../" + prevProjectData.projectPageURL} hasLeftIcon={true}/>
							<div className="body-large">{prevProjectData.projectName}</div>
						</div>
					}
					{
						nextProjectData && 
						<div className="project-navigation-next">
							<Link linkText={"Next"} style="link-primary" url={"../" + nextProjectData.projectPageURL} hasRightIcon={true}/>
							<div className="body-large">{nextProjectData.projectName}</div>
						</div>
					}
			</div>
		</div>
	)
} 