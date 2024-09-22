import React from 'react';
import ThreeDots from '../../icons/threeDots';
import BulletPoints from '../../style_guide/bulletPoints';
import Image from '../../style_guide/image';

type infoBlockProps = {
	blockHeading: string;
	blockDescription: string; 
	blockBulletPoints: string[];
}

type projectSectionProps = {
	sectionHeading: string;
	sectionDescription: string;
	infoBlocks: [];
}

const InfoBlock = ({blockHeading, blockDescription, blockBulletPoints}: infoBlockProps) => {
	return (
		<div className="project-info-block">
			{blockHeading && <div className="heading-flag">{blockHeading}</div>}
			{blockDescription && <p className="body-base">{blockDescription}</p>}
			{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
		</div>
	)
}

export default function ProjectSection ({sectionHeading, sectionDescription, infoBlocks}: projectSectionProps) {
	return (
		<div className="project-section-container">
			<div className="project-heading-container">
				{sectionHeading && <div className="heading-sub">{sectionHeading}</div>}
				{sectionDescription && <p className="body-base">{sectionDescription}</p>}:
			</div>
			<Image url=""></Image>
			{infoBlocks && 
				<div className="project-info-block-container">
					{infoBlocks.map((item:any, i:number)=>{
							return (
								<InfoBlock key={i} blockHeading={item.blockHeading} blockDescription={item.blockDescription} blockBulletPoints={item.blockBulletPoints}></InfoBlock>
							)
					})}
				</div>
			}
			<ThreeDots className={"three-dots-horizontal"}/>
		</div>
	)
}