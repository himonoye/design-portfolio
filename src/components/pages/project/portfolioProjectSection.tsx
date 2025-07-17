import React from 'react';
import BulletPoints from '../../style_guide/bulletPoints';
import Image from '../../style_guide/image';

type infoBlockProps = {
	key: number;
	blockHeading: string;
	blockDescription: string; 
	blockBulletPoints: string[];
	blockNum: string;
	blockNumCount: number;
	blockImgUrl: string;
	blockImgNeedsOverlay: boolean;
}

type projectSectionProps = {
	infoBlocks: [];
	blockStyle: string;
	blockNum: string;
}

const InfoBlockDefault = ({blockHeading, blockDescription, blockBulletPoints, blockNum, blockNumCount, blockImgUrl, blockImgNeedsOverlay}: infoBlockProps) => {
	return (
		<div className="project-info-block-default">
			{blockImgUrl && <Image url={blockImgUrl} needsOverlay={blockImgNeedsOverlay}></Image>}
			<div className="project-info-block-text">
				{(blockHeading || blockDescription) && <div className="project-info-block-text-intro">
					{(blockHeading || blockNum) && <div className="project-info-block-text-heading">
							{blockNum && <div className="circled-number">{blockNumCount+1}</div>}
							{blockHeading && <div className="heading-flag">{blockHeading}</div>}
					</div>}
					{blockDescription && <p className="body-base">{blockDescription}</p>}
				</div>}
				{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
			</div>
		</div>
	)
}

const InfoBlockCardsCols = ({blockHeading, blockDescription, blockBulletPoints, blockNum, blockNumCount, blockImgUrl, blockImgNeedsOverlay}: infoBlockProps) => {
	return (
		<div className="project-info-block-card-cols">
			{blockImgUrl && <Image url={blockImgUrl} needsOverlay={blockImgNeedsOverlay}></Image>}
			<div className="project-info-block-text">
				{(blockHeading || blockDescription) && <div className="project-info-block-text-intro">
					{(blockHeading || blockNum) && <div className="project-info-block-text-heading">
							{blockNum && <div className="circled-number">{blockNumCount+1}</div>}
							{blockHeading && <div className="heading-flag">{blockHeading}</div>}
					</div>}
					{blockDescription && <p className="body-base">{blockDescription}</p>}
				</div>}
				{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
			</div>
		</div>
	)
}

const InfoBlockCardsRows = ({blockHeading, blockDescription, blockBulletPoints, blockNum, blockNumCount, blockImgUrl, blockImgNeedsOverlay}: infoBlockProps) => {
	return (
		<div className="project-info-block-card-rows">
			{blockImgUrl && <Image url={blockImgUrl} needsOverlay={blockImgNeedsOverlay}></Image>}
			<div className="project-info-block-text">
				{(blockHeading || blockDescription) && <div className="project-info-block-text-intro">
					{(blockHeading || blockNum) && <div className="project-info-block-text-heading">
							{blockNum && <div className="circled-number">{blockNumCount+1}</div>}
							{blockHeading && <div className="heading-flag">{blockHeading}</div>}
					</div>}
					{blockDescription && <p className="body-base">{blockDescription}</p>}
				</div>}
				{blockBulletPoints && <BulletPoints bulletPoints={blockBulletPoints}/>}
			</div>
		</div>
	)
}

export function ProjectInfoBlocks ({infoBlocks, blockStyle, blockNum}: projectSectionProps) {
	switch(blockStyle) {
		case 'Card-Cols': return (
			<div className="project-info-block-list-container-cols">
					{infoBlocks.map((item:any, i:number)=>{
							return (
								<InfoBlockCardsCols
									key={i}
									blockHeading={item.blockHeading}
									blockDescription={item.blockDescription}
									blockBulletPoints={item.blockBulletPoints}
									blockNum={blockNum}
									blockNumCount={i}
									blockImgUrl={item.blockImgUrl}
									blockImgNeedsOverlay={item.blockImgNeedsOverlay}
								></InfoBlockCardsCols>
							);
					})}
			</div>
		)
		case 'Card-Rows': return (
			<div className="project-info-block-list-container-rows">
					{infoBlocks.map((item:any, i:number)=>{
							return (
								<InfoBlockCardsRows
									key={i}
									blockHeading={item.blockHeading}
									blockDescription={item.blockDescription}
									blockBulletPoints={item.blockBulletPoints}
									blockNum={blockNum}
									blockNumCount={i}
									blockImgUrl={item.blockImgUrl}
									blockImgNeedsOverlay={item.blockImgNeedsOverlay}
								></InfoBlockCardsRows>
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
									blockNum={blockNum}
									blockNumCount={i}
									blockImgUrl={item.blockImgUrl}
									blockImgNeedsOverlay={item.blockImgNeedsOverlay}
								></InfoBlockDefault>
							);
					})}
			</div>
		)
	}
}