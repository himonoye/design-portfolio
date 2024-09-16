import React from 'react';

export default function BulletPoints ({bulletPoints}) {
	return (
		<ul>
			{bulletPoints.map((item,i)=>{
				return <li key={i} className="body-base" >{item}</li>
			})}
		</ul>
	)
}