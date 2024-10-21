import React from 'react';
import BulletPoints from '../../style_guide/bulletPoints';

type projectIntroProps = {
	myResponsibilities: string[];
}

export default function PortfolioProjectIntro ({myResponsibilities}:projectIntroProps) {
	return (
		<div className="project-section-container">
			<div className="project-info-block-list-container">
				<div className="project-info-block">
					<div className="project-info-block-text">
						<div className="heading-sub">My Role & Responsibilities</div>
						<BulletPoints bulletPoints={myResponsibilities}/>
					</div>
				</div>
			</div>
		</div>
	)
}