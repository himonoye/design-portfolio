import React from 'react';
import Link from '../../style_guide/link';
import DividerThreeDots from '../../style_guide/dividerThreeDots';
import PortfolioProjectHero from './portfolioProjectHero';
import PortfolioProjectIntro from './portfolioProjectIntro';
import PortfolioProjectSection from './portfolioProjectSection';
import PasscodeForm from '../passcode_form/passcodeForm';

type showPortfolioProjectProps = {
	needPassword: boolean;
	showPortfolio: boolean;
	setShowPortfolio: Function;
	projectData: any;
	nextProjectData: any;
	prevProjectData: any;
}

export default function ShowPortfolioProject({needPassword, showPortfolio, setShowPortfolio, projectData, nextProjectData, prevProjectData}:showPortfolioProjectProps) {

	function PortfolioProjectBody() {
		return (
			<div className="content-container">
				<div className="project-section-list-container">
				
					{projectData.myResponsibilities && <DividerThreeDots/>}

					{projectData.myResponsibilities && <PortfolioProjectIntro myResponsibilities={projectData.myResponsibilities}/>}

					{projectData.myResponsibilities && <DividerThreeDots/>}
					
					{projectData.understandingUsers &&
						<PortfolioProjectSection 
							sectionHeading={projectData.understandingUsers.sectionHeading}
							sectionDescription={projectData.understandingUsers.sectionDescription}
							sectionImgUrl={projectData.understandingUsers.sectionImgUrl}
							infoBlocks={projectData.understandingUsers.infoBlocks}>
						</PortfolioProjectSection>
					}

					{projectData.understandingUsers && <DividerThreeDots/>}

					{projectData.startDesign &&
						<PortfolioProjectSection
							sectionHeading={projectData.startDesign.sectionHeading}
							sectionDescription={projectData.startDesign.sectionDescription}
							sectionImgUrl={projectData.startDesign.sectionImgUrl}
							infoBlocks={projectData.startDesign.infoBlocks}>
						</PortfolioProjectSection>
					}

					{projectData.startDesign && <DividerThreeDots/>}

					{projectData.refineDesign && 
						<PortfolioProjectSection
						sectionHeading={projectData.refineDesign.sectionHeading}
						sectionDescription={projectData.refineDesign.sectionDescription}
						sectionImgUrl={projectData.refineDesign.sectionImgUrl}
						infoBlocks={projectData.refineDesign.infoBlocks}>
						</PortfolioProjectSection>
					}

					{projectData.refineDesign && <DividerThreeDots/>}

					{projectData.takeaways &&
						<PortfolioProjectSection
						sectionHeading={projectData.takeaways.sectionHeading}
						sectionDescription={projectData.takeaways.sectionDescription}
						sectionImgUrl={projectData.takeaways.sectionImgUrl}
						infoBlocks={projectData.takeaways.infoBlocks}>
						</PortfolioProjectSection>
					}
					
				</div>
			</div>
		)
	}

	function PasswordCheck() {
		if (needPassword) {
			return (
				showPortfolio?
				<PortfolioProjectBody/>	
				:
				<PasscodeForm setShowPortfolio={setShowPortfolio}></PasscodeForm>
			)
		} else {
			return (
				<PortfolioProjectBody/>	
			)
		}
	}

	return(
		<div className="body-container">
			<PortfolioProjectHero 
					pageTitle={projectData.projectName}
					projectProblem={projectData.projectProblem}
					projectCoverImgUrl={projectData.projectCoverImgUrl}
					buttonGroup={projectData.buttonGroup}
			></PortfolioProjectHero>

			<PasswordCheck></PasswordCheck>

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