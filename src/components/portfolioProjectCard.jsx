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
                <div>
                    <div className="sub">{projectName}</div>
                    <p className="font-base">{projectDescription}</p>
                </div>
                <ThreeDots className="three-dots-horizontal"></ThreeDots>
                <Link linkText="See Project" style="primary-link" hasIcon={false}></Link>
            </div>
        </div>

    )
}