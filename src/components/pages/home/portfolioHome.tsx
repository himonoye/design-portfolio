import React, { useRef } from 'react';
import PortfolioHomeHero from './portfolioHomeHero'
import ProjectCard from './portfolioProjectCard'

type PortfolioHomeProps = {
    pageData: any;
    projectData: [];
};

export default function PortfolioHome({pageData, projectData}:PortfolioHomeProps) {
    const portfolioRef = useRef();
    return (
        <div className="body-container">
            <PortfolioHomeHero
                profileImageUrl={pageData.profileImageUrl}
                buttonScrollText={pageData.buttonScrollText}
                buttonText1={pageData.buttonText1}
                buttonUrl1={pageData.buttonUrl1}
                buttonText2={pageData.buttonText2}
                buttonUrl2={pageData.buttonUrl2}
                buttonText3={pageData.buttonText3}
                buttonUrl3={pageData.buttonUrl3}
                portfolioRef={portfolioRef}
            ></PortfolioHomeHero>
            <div className="content-container">
                <div className="card-container" ref={portfolioRef}>
                    {projectData.map((item:any, i:number)=> {
                        return <ProjectCard key={i} projectName={item.projectName} projectDescription={item.projectDescription} projectPageUrl={item.projectPageUrl} projectCoverImgUrl={item.projectCoverImgUrl}></ProjectCard>
                    })}
                </div>
            </div>
        </div>
    )
}