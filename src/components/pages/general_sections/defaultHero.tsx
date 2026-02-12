import React from 'react';
import Button from '../../style_guide/button';
import LinkComponent from '../../style_guide/link';

type DefaultHeroProps = {
    pageTitle: string;
    pageDescription: string;
    scrollTo: string;
    buttonGroup: [];
};

export default function DefaultHero ({pageTitle, pageDescription, scrollTo, buttonGroup}:DefaultHeroProps) {
    return (
        <div className="hero-container">
            <LinkComponent linkText="Back to Home" style="link-primary" url="/" hasLeftIcon={true} hasRightIcon={false}/>
            <div className="hero-intro-container">
                <div className="heading-lead">{pageTitle}</div>
                <p className="body-large">{pageDescription}</p>
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