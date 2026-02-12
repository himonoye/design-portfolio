import LinkComponent from '../../style_guide/link';
import PortfolioProjectHero from './portfolioProjectHero';
import {ProjectInfoBlocks} from './portfolioProjectSection';
import PasscodeForm from '../passcode_form/passcodeForm';
import Image from '../../style_guide/image';
import Video from '../../style_guide/video';

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
					{projectData.projectContent.map((item:any, i:number)=>{
							switch(item.sectionStyle) {
								case 'Cols': return (
									<div className="project-section-container-cols" key = {i}>
										<div className="project-section-content-container">
											{item.sectionHeading && <div className="project-section-heading-container">
												{item.browHeading && <div className="heading-brow">{item.browHeading}</div>}
												{item.sectionHeading && <div className="heading-sub">{item.sectionHeading}</div>}
												{item.sectionDescription && <p className="body-large">{item.sectionDescription}</p>}
											</div>}
											{item.infoBlocks && <ProjectInfoBlocks 
																									key={i}
																									infoBlocks={item.infoBlocks}
																									blockStyle={item.blockStyle}
																									blockNum={item.blockNum}>
																								</ProjectInfoBlocks>}
											</div>
										{item.sectionImgUrl && <Image url={item.sectionImgUrl} altTxt={item.sectionImgAltTxt} needsOverlay={false}></Image>}
										{item.sectionVideoUrl && <Video url={item.sectionVideoUrl}></Video>}
									</div>
								);
								case 'Cols-Rev': return (
									<div className="project-section-container-cols" key = {i}>
										{item.sectionImgUrl && <Image url={item.sectionImgUrl} altTxt={item.sectionImgAltTxt} needsOverlay={false}></Image>}
										{item.sectionVideoUrl && <Video url={item.sectionVideoUrl}></Video>}
										<div className="project-section-content-container">
											{item.sectionHeading && <div className="project-section-heading-container">
												{item.browHeading && <div className="heading-brow">{item.browHeading}</div>}
												{item.sectionHeading && <div className="heading-sub">{item.sectionHeading}</div>}
												{item.sectionDescription && <p className="body-large">{item.sectionDescription}</p>}
											</div>}
											{item.infoBlocks && <ProjectInfoBlocks 
																									key={i}
																									infoBlocks={item.infoBlocks}
																									blockStyle={item.blockStyle}
																									blockNum={item.blockNum}>
																								</ProjectInfoBlocks>}
											</div>
									</div>
								);
								default: return(
									<div className="project-section-container-rows" key = {i}>
										<div className="project-section-content-container">
											{item.sectionHeading && <div className="project-section-heading-container">
												{item.browHeading && <div className="heading-brow">{item.browHeading}</div>}
												{item.sectionHeading && <div className="heading-sub">{item.sectionHeading}</div>}
												{item.sectionDescription && <p className="body-large">{item.sectionDescription}</p>}
											</div>}
											{item.infoBlocks && <ProjectInfoBlocks 
																									key={i}
																									infoBlocks={item.infoBlocks}
																									blockStyle={item.blockStyle}
																									blockNum={item.blockNum}>
																								</ProjectInfoBlocks>}
											</div>
										{item.sectionImgUrl && <Image url={item.sectionImgUrl} altTxt={item.sectionImgAltTxt} needsOverlay={false}></Image>}
										{item.sectionVideoUrl && <Video url={item.sectionVideoUrl}></Video>}
									</div>
								);
							}
					})}
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
					pageDescription={projectData.projectDescription}
					projectDuration={projectData.projectDuration}
					projectRole={projectData.projectRole}
					projectCoverImgUrl={projectData.projectCoverImgUrl}
					projectCoverAltTxt={projectData.projectCoverAltTxt}
					buttonGroup={projectData.buttonGroup}
			></PortfolioProjectHero>

			<PasswordCheck></PasswordCheck>

			<div className="bottom-container">
					{prevProjectData && 
						<div className="project-navigation-prev">
					<LinkComponent linkText={"Previous"} style="link-primary" url={"/" + prevProjectData.projectPageUrl} hasLeftIcon={true} hasRightIcon={false}/>
							<div className="body-large">{prevProjectData.projectName}</div>
						</div>
					}
					{nextProjectData && 
						<div className="project-navigation-next">
					<LinkComponent linkText={"Next"} style="link-primary" url={"/" + nextProjectData.projectPageUrl} hasLeftIcon={false} hasRightIcon={true}/>
							<div className="body-large">{nextProjectData.projectName}</div>
						</div>
					}
			</div>
	</div>
	)
} 