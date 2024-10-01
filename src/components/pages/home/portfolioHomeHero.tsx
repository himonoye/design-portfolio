import React from 'react';
import ThreeDots from '../../icons/threeDots';
import Button from '../../style_guide/button';
// import profileImage from '../../../assets/imgs/profileImage.png';

type PortfolioHomeHeroProps = {
    profileImgUrl: string;
    buttonGroup:[];
    refPointer?: React.MutableRefObject<HTMLInputElement>
};

export default function PortfolioHomeHero ({profileImgUrl, buttonGroup, refPointer}:PortfolioHomeHeroProps) {
    return (
        <div className="hero-container">
            <div className="hero-heading-container">
                <img className="profileImage" src={profileImgUrl}></img>
                <div className="heading-headline">
                    <span id="hello">Hello, </span>
                    <span id="name">I'm Ming Ye!</span>
                </div>
                <p className="body-large"><mark>I’m a Full Stack Designer near Washington DC who creates high-quality digital products to help businesses and their users achieve their goals.</mark> With my background in design and programming, I serve as a bridge between users, designers, and developers. I approach every problem with empathy, curiosity, and positivity to find a win-win solution.</p>
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
        </div>
    )
}