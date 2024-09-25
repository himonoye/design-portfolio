import React from 'react';
import { NavLink } from 'react-router-dom';
import ThreeDots from '../../icons/threeDots';
import Image from '../../style_guide/image';

type ProjectCardProps = {
    projectName: string;
    projectPageUrl: string;
    projectDescription: string;
    projectCoverImgUrl: string;
};

export default function ProjectCard({projectName, projectDescription, projectPageUrl, projectCoverImgUrl}:ProjectCardProps){
    return (
        <NavLink to={projectPageUrl} className="project-card">
            <Image url={projectCoverImgUrl}></Image>
            <div className="project-card-body">
                <div className="heading-sub">{projectName}</div>
                <p className="body-base">{projectDescription}</p>
            </div>
        </NavLink>
    )
}