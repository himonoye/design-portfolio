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
	infoBlocks: [];
	blockStyle: string;
}

const InfoBlockDefault = ({blockHeading, blockDescription, blockBulletPoints, blockImgUrl, blockImgNeedsOverlay}: infoBlockProps) => {
	return (
		<div className="project-info-block-default">
			{blockImgUrl && <Image url={blockImgUrl} needsOverlay={blockImgNeedsOverlay}></Image>}
			<div className="project-info-block-text">
				{blockHeading && <div className="heading-flag">{blockHeading}</div>}
				{blockDescription && <p className="body-base">{blockDescription}</p>}
				{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
			</div>
		</div>
	)
}

const InfoBlockCards = ({blockHeading, blockDescription, blockBulletPoints, blockImgUrl, blockImgNeedsOverlay}: infoBlockProps) => {
	return (
		<div className="project-info-block-card">
			{blockImgUrl && <Image url={blockImgUrl} needsOverlay={blockImgNeedsOverlay}></Image>}
			<div className="project-info-block-text">
				{blockHeading && <div className="heading-flag">{blockHeading}</div>}
				{blockDescription && <p className="body-base">{blockDescription}</p>}
				{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
			</div>
		</div>
	)
}

export function ProjectInfoBlocks ({infoBlocks, blockStyle}: projectSectionProps) {
	switch(blockStyle) {
		case 'Cols': return (
			<div className="project-info-block-list-container-cols">
					{infoBlocks.map((item:any, i:number)=>{
							return (
								<InfoBlockCards
									key={i}
									blockHeading={item.blockHeading}
									blockDescription={item.blockDescription}
									blockBulletPoints={item.blockBulletPoints}
									blockImgUrl={item.blockImgUrl}
									blockImgNeedsOverlay={item.blockImgNeedsOverlay}
								></InfoBlockCards>
							);
					})}
			</div>
		)
		default: return (
			<div className="project-info-block-list-container">
					{infoBlocks.map((item:any, i:number)=>{
							return (
								<InfoBlockDefault
									key={i}
									blockHeading={item.blockHeading}
									blockDescription={item.blockDescription}
									blockBulletPoints={item.blockBulletPoints}
									blockImgUrl={item.blockImgUrl}
									blockImgNeedsOverlay={item.blockImgNeedsOverlay}
								></InfoBlockDefault>
							);
					})}
			</div>
		)
	}
}