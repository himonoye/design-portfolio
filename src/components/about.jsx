import React from 'react';
import { DefaultHero } from './hero';

export default function About({pageData}) {
    return (
        <div className="body-container">
            <DefaultHero 
                pageTitle={pageData.title}
                pageDescription={pageData.description}
                buttonText1={pageData.buttonText1}
                buttonUrl1={pageData.buttonUrl1}
                buttonText2={pageData.buttonText2}
                buttonUrl2={pageData.buttonUrl2}
                isHome={false}
            ></DefaultHero>
        </div>
    )
}