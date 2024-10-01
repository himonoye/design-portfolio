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
                profileImgUrl={pageData.profileImgUrl}
                buttonGroup={pageData.buttonGroup}
                refPointer={portfolioRef}
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