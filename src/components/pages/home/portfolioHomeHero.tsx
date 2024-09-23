import React from 'react';
import ThreeDots from '../../icons/threeDots';
import Button from '../../style_guide/button';
// import profileImage from '../../../assets/imgs/profileImage.png';

type PortfolioHomeHeroProps = {
    profileImageUrl: string;
    buttonScrollText: string;
    portfolioRef: any;
    buttonText1: string;
    buttonUrl1: string;
    buttonText2: string;
    buttonUrl2: string;
    buttonText3: string;
    buttonUrl3: string;
};

export default function PortfolioHomeHero ({profileImageUrl,buttonScrollText, portfolioRef, buttonText1, buttonUrl1, buttonText2, buttonUrl2, buttonText3, buttonUrl3}:PortfolioHomeHeroProps) {
    return (
        <div className="hero-container">
            <img className="profileImage" src={profileImageUrl}></img>
            <div className="heading-headline">
                <span id="hello">Hello, </span>
                <span id="name">I'm Ming Ye!</span>
            </div>
            <ThreeDots className={"three-dots-horizontal"}/>
            <p className="body-large"><mark>I’m a Full Stack Designer near Washington DC who creates high-quality digital products to help businesses and their users achieve their goals.</mark> With my background in design and programming, I serve as a bridge between users, designers, and developers. I approach every problem with empathy, curiosity, and positivity to find a win-win solution.</p>
            {buttonScrollText || buttonText1 || buttonText2 || buttonText3?
                <div className="button-group">
                    {buttonScrollText?<Button style="button-primary" buttonText={buttonScrollText} type={"scrollTo"} refPointer={portfolioRef}/>:""}
                    {buttonText1?<Button style="button-primary" buttonText={buttonText1} type={"link"} url={buttonUrl1}/>:""}
                    {buttonText2?<Button style="button-primary" buttonText={buttonText2} type={"link"} url={buttonUrl2}/>:""}
                    {buttonText3?<Button style="button-secondary" buttonText={buttonText3} type={"link"} url={buttonUrl3}/>:""}
                </div>:""
            }
        </div>
    )
}