import React from 'react';
import ThreeDots from './threeDots';
import Button from './button';
import Link from './link';

const HomePageHero = ({pageDescription, buttonText1, buttonUrl1, buttonText2, buttonUrl2, buttonText3, buttonUrl3, portfolioRef}) => {
    return (
        <div className="hero-container">
            <div className="heading-headline">
                <span id="hello">Hello </span>
                <span id="name">I'm Ming Ye!</span>
            </div>
            {/* <ThreeDots className={"three-dots-horizontal"}/> */}
            <p className="heading-flag"><mark>I’m a Full Stack Designer near Washington DC who creates high-quality digital products to help businesses and their users achieve their goals.</mark> With my background in design and programming, I serve as a bridge between users, designers, and developers. I approach every problem with empathy, curiosity, and positivity to find a win-win solution.</p>
            {buttonText1 || buttonText2 || buttonText3?
                <div className="button-group">
                    {buttonText1?<Button style="button-primary" buttonText={buttonText1} url={buttonUrl1} type={"scrollTo"} refPointer={portfolioRef}/>:""}
                    {buttonText2?<Button style="button-secondary" buttonText={buttonText2} url={buttonUrl2}/>:""}
                    {buttonText3?<Button style="button-secondary" buttonText={buttonText3} url={buttonUrl3}/>:""}
                </div>:""
            }
        </div>
    )
}

const PortfolioProjectHero = ({pageTitle, pageObjective, pageRequirement, pageDescription, buttonText1, buttonText2, buttonUrl1, buttonUrl2}) => {
    return (
        <div className="hero-container">
            <div className="heading-lead">{pageTitle}</div>
            <ThreeDots className={"three-dots-horizontal"}/>
            <div className="project-summary">
                <div className="project-objective">
                    <div className="heading-brow">Objective</div>
                    <p className="body-large">{pageObjective}</p>
                </div>
                <div className="project-requirement">
                    <div className="heading-brow">Requirement</div>
                    <p className="body-large">{pageRequirement}</p>
                </div>
            </div>
            {buttonText1 || buttonText2?
                <div className="button-group">
                    {buttonText1?<Button style="button-primary" buttonText={buttonText1} url={buttonUrl1}/>:""}
                    {buttonText2?<Button style="button-secondary" buttonText={buttonText2} url={buttonUrl2}/>:""}
                </div>:""
            }
        </div>
    )
}

const DefaultHero = ({pageTitle, pageDescription, buttonText1, buttonText2, buttonUrl1, buttonUrl2}) => {
    return (
        <div className="hero-container">
            <div className="heading-lead">{pageTitle}</div>
            <ThreeDots className={"three-dots-horizontal"}/>
            <p className="heading-flag">{pageDescription}</p>
            {buttonText1 || buttonText2?
                <div className="button-group">
                    {buttonText1?<Button style="button-primary" buttonText={buttonText1} url={buttonUrl1}/>:""}
                    {buttonText2?<Button style="button-secondary" buttonText={buttonText2} url={buttonUrl2}/>:""}
                </div>:""
            }
        </div>
    )
}

const HeroImage = () => {
    return (
        <div className="hero-image">
            <div className="hero-link">
                <Link linkText="Back to All Projects" style="link-primary" url=".." hasIcon={true}/>
            </div>
            <div className="hero-overlay"/>
            <img></img>
        </div>
    )
}

export {
    HomePageHero,
    DefaultHero,
    PortfolioProjectHero,
    HeroImage
}