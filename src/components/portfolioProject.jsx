import React from 'react';
import { PortfolioProjectHero, HeroImage } from './hero';

export default function PortfolioProject({projectData}) {
    return (
        <div className="body-container">
            <HeroImage/>
            <PortfolioProjectHero 
                pageTitle={projectData.projectName}
                pageObjective={projectData.projectObjective}
                pageRequirement={projectData.projectRequirement}
                isHome={false}
            ></PortfolioProjectHero>
            <div className="content-container">
                <p className="body-large">{projectData.projectDescription}</p>
            </div>
        </div>
    )
} 