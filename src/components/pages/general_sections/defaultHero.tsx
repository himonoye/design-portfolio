import React from 'react';
import Button from '../../style_guide/button';
import Link from '../../style_guide/link';

type DefaultHeroProps = {
    pageTitle: string;
    pageDescription: string;
    scrollRef: any;
    buttonGroup: [];
};

export default function DefaultHero ({pageTitle, pageDescription, buttonGroup}:DefaultHeroProps) {
    return (
        <div className="hero-container">
            <Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true} hasRightIcon={false}/>
            <div className="hero-heading-container">
                <div className="heading-lead">{pageTitle}</div>
                <p className="body-large">{pageDescription}</p>
            </div>
            {buttonGroup &&
                <div className="button-group">
                    {buttonGroup.map((item:any,i)=>{
                        return(
                            <Button key = {i} style="button-primary" buttonText={item.buttonText} buttonType={item.buttonType} url={item.buttonUrl} refPointer={item.scrollTo}/>
                        )
                    })}     
                </div>
            }
        </div>
    )
}