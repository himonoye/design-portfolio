import React from 'react';
import ThreeDots from '../../icons/threeDots';
import Button from '../../style_guide/button';
// import profileImage from '../../../assets/imgs/profileImage.png';

type PortfolioHomeHeroProps = {
    profileImgUrl: string;
    buttonGroup:[];
    pageDescription: string;
    refPointer?: React.MutableRefObject<HTMLInputElement>
};

export default function PortfolioHomeHero ({profileImgUrl, buttonGroup, pageDescription, refPointer}:PortfolioHomeHeroProps) {
    return (
        <div className="hero-container">
            <img className="profileImage" src={profileImgUrl}></img>
            <div className="hero-intro-container">
                <div className="heading-headline">
                    <span id="hello">Hello, </span>
                    <span id="name">I'm Ming Ye!</span>
                </div>
                <p className="body-large">{pageDescription}</p>
            </div>
            {buttonGroup &&
                    <div className="button-group">
                        {buttonGroup.map((item:any,i)=>{
                            return(
                                <Button key = {i} style="button-primary" buttonText={item.buttonText} buttonType={item.buttonType} url={item.buttonUrl} refPointer={refPointer}/>
                            )
                        })}     
                    </div>
            }
        </div>
    )
}