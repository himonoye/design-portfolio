import React, { useRef } from 'react';
import {HomePageHero} from './hero';
import ProjectCard from './portfolioProjectCard'

export default function Portfolio({pageData, projectData}) {
    const portfolioRef = useRef();
    return (
        <div className="body-container">
            <HomePageHero
                pageDescription={pageData.description}
                buttonText1={pageData.buttonText1}
                buttonUrl1={pageData.buttonUrl1}
                buttonText2={pageData.buttonText2}
                buttonUrl2={pageData.buttonUrl2}
                isHome={true}
                portfolioRef={portfolioRef}
            ></HomePageHero>
            <div className="content-container">
                <div className="head" ref={portfolioRef}>Projects</div>
                <div className="card-container">
                    {projectData.map((item, i)=> {
                        return <ProjectCard key={i} projectName={item.projectName} projectDescription={item.projectDescription}/*imgUrl={item.imgUrl}*/></ProjectCard>
                    })}
                </div>
            </div>
        </div>
    )
}