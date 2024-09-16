import React from 'react';
import ThreeDots from '../../icons/threeDots';
import Button from '../../style_guide/button';
import Link from '../../style_guide/link';

export default function ResumeHero ({pageTitle, pageDescription, buttonText1, buttonText2, buttonUrl1, buttonUrl2}){
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