import React from 'react';
import Button from '../../style_guide/button';
import Link from '../../style_guide/link';

export default function DefaultHero ({pageTitle, pageDescription, buttonText1, buttonText2, buttonText3, buttonUrl1, buttonUrl2, buttonUrl3}) {
    return (
        <div className="hero-container">
            <Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true}/>
            <div className="heading-lead">{pageTitle}</div>
            <p className="body-large">{pageDescription}</p>
            {buttonText1 || buttonText2 || buttonText3?
                <div className="button-group">
                    {buttonText1?<Button style="button-primary" buttonText={buttonText1} url={buttonUrl1}/>:""}
                    {buttonText2?<Button style="button-primary" buttonText={buttonText2} url={buttonUrl2}/>:""}
                    {buttonText3?<Button style="button-secondary" buttonText={buttonText3} url={buttonUrl3}/>:""}
                </div>:""
            }
        </div>
    )
}