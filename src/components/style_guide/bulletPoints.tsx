import React from 'react';

type bulletPointsProps = {
	bulletPoints: string[];
}

export default function BulletPoints ({bulletPoints}:bulletPointsProps) {
	return (
		<ul className="project-info-block-bulletPoints">
			{bulletPoints.map((item:string, i:number)=>{
				return <li key={i} className="body-base" >{item}</li>
			})}
		</ul>
	)
}