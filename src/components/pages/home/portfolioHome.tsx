import PortfolioHomeHero from './portfolioHomeHero'
import ProjectCard from './portfolioProjectCard'
import { Footer } from '../general_sections/globalNav';

type PortfolioHomeProps = {
    pageData: any;
    projectData: any;
    footerData: any;
};

export default function PortfolioHome({pageData, projectData, footerData}:PortfolioHomeProps) {

    return (
        <div className="body-container">
            <PortfolioHomeHero
                profileImgUrl={pageData.profileImgUrl}
                profileImgAltTxt={pageData.profileImgAltTxt}
                buttonGroup={pageData.buttonGroup}
                pageTitle={pageData.pageTitle}
                pageSubtitle={pageData.pageSubtitle}
                pageDescription={pageData.description}
            ></PortfolioHomeHero>
            <div id="case-studies" className="content-container">
                <div className="card-container">
                    {projectData.map((item:any, i:number)=> {
                        return <ProjectCard key={i} projectName={item.projectName} projectSkills={item.projectSkills} projectDescription={item.projectDescription} projectPageUrl={item.projectPageUrl} projectCoverImgUrl={item.projectCoverImgUrl} projectCoverAltTxt={item.projectCoverAltTxt}></ProjectCard>
                    })}
                </div>
            </div>
            <Footer footerData={footerData}></Footer>
        </div>
    )
}