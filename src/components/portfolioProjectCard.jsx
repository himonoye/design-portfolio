import React from 'react';
import Link from './link';
import ThreeDots from './threeDots';

export default function ProjectCard({imgUrl,projectName,projectDescription}){
    return (
        <div className="project-card">
            <div className="image-wrapper">
                <img src={imgUrl}></img>
            </div>
            <div className="project-card-body">
                <div className="heading-sub">{projectName}</div>
                <p className="body-large">{projectDescription}</p>
                <ThreeDots className="three-dots-horizontal"></ThreeDots>
                <Link linkText="See Project" style="link-secondary" hasIcon={false}></Link>
            </div>
        </div>
    )
}