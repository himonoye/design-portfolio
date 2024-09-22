import React from 'react';
import Button from '../../style_guide/button';
import Link from '../../style_guide/link';

type DefaultHeroProps = {
    pageTitle: string;
    pageDescription: string;
    buttonScrollText: string;
    scrollRef: any;
    buttonText1: string;
    buttonUrl1: string;
    buttonText2: string;
    buttonUrl2: string;
    buttonText3: string;
    buttonUrl3: string;
};

export default function DefaultHero ({pageTitle, pageDescription, buttonScrollText, scrollRef, buttonText1, buttonText2, buttonText3, buttonUrl1, buttonUrl2, buttonUrl3}:DefaultHeroProps) {
    return (
        <div className="hero-container">
            <Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true} hasRightIcon={false}/>
            <div className="heading-lead">{pageTitle}</div>
            <p className="body-large">{pageDescription}</p>
            {buttonScrollText || buttonText1 || buttonText2 || buttonText3?
                <div className="button-group">
                    {buttonScrollText?<Button style="button-primary" buttonText={buttonScrollText} type={"scrollTo"} refPointer={scrollRef}/>:""} 
                    {buttonText1?<Button style="button-primary" buttonText={buttonText1} type={"link"} url={buttonUrl1}/>:""}
                    {buttonText2?<Button style="button-secondary" buttonText={buttonText2} type={"link"} url={buttonUrl2}/>:""}
                    {buttonText3?<Button style="button-secondary" buttonText={buttonText3} type={"link"} url={buttonUrl3}/>:""}
                </div>:""
            }
        </div>
    )
}