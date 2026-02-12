import React from 'react';
import ThreeDots from '../../icons/threeDots';
import Button from '../../style_guide/button';
// import profileImage from '../../../assets/imgs/profileImage.png';

type PortfolioHomeHeroProps = {
    profileImgUrl: string;
    profileImgAltTxt: string;
    buttonGroup:[];
    pageTitle: string;
    pageSubtitle: string;
    pageDescription: string;
    scrollTo?: string;
};

export default function PortfolioHomeHero ({profileImgUrl, profileImgAltTxt, buttonGroup, pageTitle, pageSubtitle, pageDescription}:PortfolioHomeHeroProps) {
    return (
        <div className="hero-container">
            {/* <img className="profileImage" src={profileImgUrl} alt={profileImgAltTxt}></img> */}
            <div className="home-hero-intro-container">
                <div className="heading-sub">{pageTitle}</div>
                <div className="heading-headline" >{pageSubtitle}</div>
                <div className="body-large">{pageDescription}</div>
            </div>
            {buttonGroup &&
                    <div className="button-group">
                        {buttonGroup.map((item:any,i)=>{
                            return(
                                <Button key = {i} style="button-primary" buttonText={item.buttonText} buttonType={item.buttonType} url={item.buttonUrl} scrollTo={item.scrollTo}/>
                            )
                        })}     
                    </div>
            }
        </div>
    )
}