import React from 'react';
import { NavLink } from 'react-router-dom';
import ThreeDots from '../../icons/threeDots';

export default function ProjectCard({imgUrl, projectName, projectDescription, projectPageUrl}){
    return (
        <NavLink to={projectPageUrl} className="project-card">
            <div className="image-wrapper">
                <img src={imgUrl}/>
            </div>
            <div className="project-card-body">
                <div className="heading-flag">{projectName}</div>
                <p className="body-base">{projectDescription}</p>
            </div>
            <ThreeDots className="three-dots-horizontal"></ThreeDots>
        </NavLink>
    )
}