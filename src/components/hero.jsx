import React from 'react';
import ThreeDots from './threeDots';
import Button from './button';
import Link from './link';

const HomePageHero = ({pageDescription, buttonText1, buttonText2, buttonUrl1, buttonUrl2, portfolioRef}) => {
    return (
        <div className="hero-container">
            <div className="headline">
                <span id="hello">Hello! </span>
                <span id="name">I'm Ming Ye!</span>
            </div>
            <ThreeDots className={"three-dots-horizontal"}/>
            <p className="flag">I’m a <mark>product-driven Full Stack Designer</mark> who creates high-quality digital products to help businesses and their users achieve their goals. With my background in design and programming, I serve as a bridge between users, designers, and developers. I approach every problem with empathy, curiosity, and positivity to find a win-win solution.</p>
            {buttonText1 || buttonText2?
                <div className="button-group">
                    {buttonText1?<Button style="primary-button" buttonText={buttonText1} url={buttonUrl1} type={"scrollTo"} refPointer={portfolioRef}/>:""}
                    {buttonText2?<Button style="secondary-button" buttonText={buttonText2} url={buttonUrl2}/>:""}
                </div>:""
            }
        </div>
    )
}

const PortfolioProjectHero = ({pageTitle, pageObjective, pageRequirement, pageDescription, buttonText1, buttonText2, buttonUrl1, buttonUrl2}) => {
    return (
        <div className="hero-container">
            <div className="lead">{pageTitle}</div>
            <ThreeDots className={"three-dots-horizontal"}/>
            <div className="project-summary">
                <div className="project-objective">
                    <div className="brow">Objective</div>
                    <p className="font-larger">{pageObjective}</p>
                </div>
                <div className="project-requirement">
                    <div className="brow">Requirement</div>
                    <p className="font-larger">{pageRequirement}</p>
                </div>
            </div>
            {buttonText1 || buttonText2?
                <div className="button-group">
                    {buttonText1?<Button style="primary-button" buttonText={buttonText1} url={buttonUrl1}/>:""}
                    {buttonText2?<Button style="secondary-button" buttonText={buttonText2} url={buttonUrl2}/>:""}
                </div>:""
            }
        </div>
    )
}

const DefaultHero = ({pageTitle, pageDescription, buttonText1, buttonText2, buttonUrl1, buttonUrl2}) => {
    return (
        <div className="hero-container">
            <div className="lead">{pageTitle}</div>
            <ThreeDots className={"three-dots-horizontal"}/>
            <p className="font-larger">{pageDescription}</p>
            {buttonText1 || buttonText2?
                <div className="button-group">
                    {buttonText1?<Button style="primary-button" buttonText={buttonText1} url={buttonUrl1}/>:""}
                    {buttonText2?<Button style="secondary-button" buttonText={buttonText2} url={buttonUrl2}/>:""}
                </div>:""
            }
        </div>
    )
}

const HeroImage = () => {
    return (
        <div className="hero-image">
            <div className="hero-link">
                <Link linkText="Back to All Projects" style="primary-link" url=".." hasIcon={true}/>
            </div>
            <div className="overlay"/>
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