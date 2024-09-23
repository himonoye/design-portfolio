import React from 'react';
import BulletPoints from '../../style_guide/bulletPoints';

type projectSummaryProps = {
	projectImpact: string;
	myResponsibilities: string[];
}

export default function ProjectSummary ({projectImpact, myResponsibilities}:projectSummaryProps) {
	return (
		<div className="project-section-container">
			<div className="project-info-block-container">
				<div className="project-info-block">
					<div className="heading-sub">The Impact</div>
					<p className="body-base">{projectImpact}</p>
				</div>
				<div className="project-info-block">
					<div className="heading-sub">My Role & Responsibilities</div>
					<BulletPoints bulletPoints={myResponsibilities}/>
				</div>
			</div>
		</div>
	)
}