import React from 'react';
import BulletPoints from '../../style_guide/bulletPoints';
import Image from '../../style_guide/image';

type infoBlockProps = {
	blockHeading: string;
	blockDescription: string; 
	blockBulletPoints: string[];
	blockImgUrl: string;
	blockImgNeedsOverlay: boolean;
}

type projectSectionProps = {
	sectionHeading: string;
	sectionDescription: string;
	sectionImgUrl: string;
	infoBlocks: [];
}

const InfoBlock = ({blockHeading, blockDescription, blockBulletPoints, blockImgUrl, blockImgNeedsOverlay}: infoBlockProps) => {
	return (
		<div className="project-info-block">
			<div className="project-info-block-text">
				{blockHeading && <div className="heading-sub">{blockHeading}</div>}
				{blockDescription && <p className="body-large">{blockDescription}</p>}
				{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
			</div>
			{blockImgUrl && <Image url={blockImgUrl} needsOverlay={blockImgNeedsOverlay}></Image>}
		</div>
	)
}

export default function ProjectSection ({sectionHeading, sectionDescription, sectionImgUrl, infoBlocks,}: projectSectionProps) {
	return (
		<div className="project-section-container">
			{sectionHeading && <div className="project-section-heading-container">
				{sectionHeading && <div className="heading-head">{sectionHeading}</div>}
				{sectionDescription && <p className="body-large">{sectionDescription}</p>}
				{sectionImgUrl && <Image url={sectionImgUrl} needsOverlay={false}></Image>}
			</div>
			}
			{infoBlocks && 
				<div className="project-info-block-list-container">
					{infoBlocks.map((item:any, i:number)=>{
							return (
								<InfoBlock
									key={i}
									blockHeading={item.blockHeading}
									blockDescription={item.blockDescription}
									blockBulletPoints={item.blockBulletPoints}
									blockImgUrl={item.blockImgUrl}
									blockImgNeedsOverlay={item.blockImgNeedsOverlay}
								></InfoBlock>
							)
					})}
				</div>
			}
		</div>
	)
}