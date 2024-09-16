import React from 'react';
import { NavLink } from 'react-router-dom';
import ThreeDots from '../../icons/threeDots';
import Image from '../general_sections/image';

export default function ProjectCard({imgUrl, projectName, projectDescription, projectPageUrl}){
    return (
        <NavLink to={projectPageUrl} className="project-card">
            <Image></Image>
            <div className="project-card-body">
                <div className="heading-flag">{projectName}</div>
                <p className="body-base">{projectDescription}</p>
            </div>
            <ThreeDots className="three-dots-horizontal"></ThreeDots>
        </NavLink>
    )
}