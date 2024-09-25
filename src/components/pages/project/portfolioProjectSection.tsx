import React from 'react';
import DividerThreeDots from '../../style_guide/dividerThreeDots';
import BulletPoints from '../../style_guide/bulletPoints';
import Image from '../../style_guide/image';

type infoBlockProps = {
	blockHeading: string;
	blockDescription: string; 
	blockBulletPoints: string[];
	blockImgUrl: string;
}

type projectSectionProps = {
	sectionHeading: string;
	sectionDescription: string;
	sectionImgUrl: string;
	infoBlocks: [];
}

const InfoBlock = ({blockHeading, blockDescription, blockBulletPoints, blockImgUrl}: infoBlockProps) => {
	return (
		<div className="project-info-block">
			{blockHeading && <div className="heading-flag">{blockHeading}</div>}
			{blockDescription && <p className="body-base">{blockDescription}</p>}
			{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
			{blockImgUrl && <Image url={blockImgUrl}></Image>}
		</div>
	)
}

export default function ProjectSection ({sectionHeading, sectionDescription, sectionImgUrl, infoBlocks,}: projectSectionProps) {
	return (
		<div className="project-section-container">
			<div className="project-heading-container">
				{sectionImgUrl && <Image url={sectionImgUrl}></Image>}
				{sectionHeading && <div className="heading-sub">{sectionHeading}</div>}
				{sectionDescription && <p className="body-base">{sectionDescription}</p>}
			</div>
			{infoBlocks && 
				<div className="project-info-block-container">
					{infoBlocks.map((item:any, i:number)=>{
							return (
								<InfoBlock
									key={i}
									blockHeading={item.blockHeading}
									blockDescription={item.blockDescription}
									blockBulletPoints={item.blockBulletPoints}
									blockImgUrl={item.blockImgUrl}
								></InfoBlock>
							)
					})}
				</div>
			}
			<DividerThreeDots/>
		</div>
	)
}