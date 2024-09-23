import React from 'react';
import Link from '../../style_guide/link';
import Image from '../../style_guide/image';
import PortfolioProjectHero from './portfolioProjectHero';
import PortfolioProjectSummary from './portfolioProjectSummary';
import PortfolioProjectSection from './portfolioProjectSection';

type PortfolioProjectProps = {
	projectData: any;
	nextProjectData: any;
	prevProjectData: any;
}

export default function PortfolioProject({projectData, nextProjectData, prevProjectData}:PortfolioProjectProps) {
	return (
		<div className="body-container">
			<PortfolioProjectHero 
					pageTitle={projectData.projectName}
					projectProblem={projectData.projectProblem}
					projectCoverImgUrl={projectData.projectCoverImgUrl}
			></PortfolioProjectHero>

			<div className="content-container">
				<PortfolioProjectSummary projectImpact={projectData.projectImpact} myResponsibilities={projectData.myResponsibilities}/>

				{projectData.understandingUsers &&
					<PortfolioProjectSection 
						sectionHeading={projectData.understandingUsers.sectionHeading}
						sectionDescription={projectData.understandingUsers.sectionDescription}
						infoBlocks={projectData.understandingUsers.infoBlocks}>
					</PortfolioProjectSection>
				}

				{projectData.startDesign &&
					<PortfolioProjectSection
						sectionHeading={projectData.startDesign.sectionHeading}
						sectionDescription={projectData.startDesign.sectionDescription}
						infoBlocks={projectData.startDesign.infoBlocks}>
					</PortfolioProjectSection>
				}

				{projectData.refineDesign && 
					<PortfolioProjectSection
					sectionHeading={projectData.refineDesign.sectionHeading}
					sectionDescription={projectData.refineDesign.sectionDescription}
					infoBlocks={projectData.refineDesign.infoBlocks}>
					</PortfolioProjectSection>
				}

				{projectData.takeaways &&
					<PortfolioProjectSection
					sectionHeading={projectData.takeaways.sectionHeading}
					sectionDescription={projectData.takeaways.sectionDescription}
					infoBlocks={projectData.takeaways.infoBlocks}>
					</PortfolioProjectSection>
				}
			</div>

			<div className="bottom-container">
					{prevProjectData && 
						<div className="project-navigation-prev">
							<Link linkText={"Previous"} style="link-primary" url={"../" + prevProjectData.projectPageUrl} hasLeftIcon={true} hasRightIcon={false}/>
							<div className="body-large">{prevProjectData.projectName}</div>
						</div>
					}
					{nextProjectData && 
						<div className="project-navigation-next">
							<Link linkText={"Next"} style="link-primary" url={"../" + nextProjectData.projectPageUrl} hasLeftIcon={false} hasRightIcon={true}/>
							<div className="body-large">{nextProjectData.projectName}</div>
						</div>
					}
			</div>
		</div>
	)
} 