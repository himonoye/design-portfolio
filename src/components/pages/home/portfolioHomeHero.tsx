import React from 'react';
import ThreeDots from '../../icons/threeDots';
import Button from '../../style_guide/button';
// import profileImage from '../../../assets/imgs/profileImage.png';

type PortfolioHomeHeroProps = {
    profileImgUrl: string;
    buttonScrollText: string;
    portfolioRef: any;
    buttonText1: string;
    buttonUrl1: string;
    buttonText2: string;
    buttonUrl2: string;
    buttonText3: string;
    buttonUrl3: string;
};

export default function PortfolioHomeHero ({profileImgUrl,buttonScrollText, portfolioRef, buttonText1, buttonUrl1, buttonText2, buttonUrl2, buttonText3, buttonUrl3}:PortfolioHomeHeroProps) {
    return (
        <div className="hero-container">
            <img className="profileImage" src={profileImgUrl}></img>
                <div className="hero-heading-container">
                    <div className="heading-headline">
                        <span id="hello">Hello, </span>
                        <span id="name">I'm Ming Ye!</span>
                    </div>
                    <p className="body-large"><mark>I’m a Full Stack Designer near Washington DC who creates high-quality digital products to help businesses and their users achieve their goals.</mark> With my background in design and programming, I serve as a bridge between users, designers, and developers. I approach every problem with empathy, curiosity, and positivity to find a win-win solution.</p>
                </div>
        </div>
    )
}