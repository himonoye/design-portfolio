import React from 'react';
import Link from 'next/link';
import ThreeDots from '../../icons/threeDots';
import Image from '../../style_guide/image';

type ProjectCardProps = {
    projectName: string;
    projectPageUrl: string;
    projectDescription: string;
    projectCoverImgUrl: string;
    projectCoverAltTxt: string;
    projectSkills: string[];
};

export default function ProjectCard({projectName, projectSkills, projectDescription, projectPageUrl, projectCoverImgUrl, projectCoverAltTxt}:ProjectCardProps){
    return (
        <Link href={projectPageUrl} className="project-card-wrapper">
            <div className="project-card"> 
                <Image url={projectCoverImgUrl} altTxt={projectCoverAltTxt} needsOverlay={false}></Image>
                <div className="project-card-body">
                    <div className="project-card-heading">
                        <div className="heading-sub">{projectName}</div>
                        <p className="body-base">{projectDescription}</p>
                    </div>
                    <div className="project-skills">
                        {projectSkills.map((item:string, k:number) => {
                            // const numOfSkills = projectSkills.length;
                            return (
                            <div className="project-skills-entry" key={k}>
                                <div className="body-small">{item}</div>
                                {/* {k==numOfSkills-1?"":<div className="project-skills-divider"></div>} */}
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Link>
    )
}