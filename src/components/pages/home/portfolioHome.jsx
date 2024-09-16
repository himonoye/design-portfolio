import React, { useRef } from 'react';
import PortfolioHomeHero from './portfolioHomeHero'
import ProjectCard from './portfolioProjectCard'

export default function PortfolioHome({pageData, projectData}) {
    const portfolioRef = useRef();
    return (
        <div className="body-container">
            <PortfolioHomeHero
                pageDescription={pageData.description}
                buttonText1={pageData.buttonText1}
                buttonUrl1={pageData.buttonUrl1}
                buttonText2={pageData.buttonText2}
                buttonUrl2={pageData.buttonUrl2}
                buttonText3={pageData.buttonText3}
                buttonUrl3={pageData.buttonUrl3}
                portfolioRef={portfolioRef}
            ></PortfolioHomeHero>
            <div className="content-container">
                <div className="heading-head" ref={portfolioRef}>Projects</div>
                <div className="card-container">
                    {projectData.map((item, i)=> {
                        return <ProjectCard key={i} projectName={item.projectName} projectDescription={item.projectDescription} projectPageUrl={item.projectPageURL}></ProjectCard>
                    })}
                </div>
            </div>
        </div>
    )
}