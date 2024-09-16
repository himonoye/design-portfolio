import React from 'react';
import DefaultHero from '../general_sections/defaultHero';
import ResumePDF from './resumePDF';

export default function Resume({pageData, resumeData}) {
    return (
        <div className="body-container">
            <DefaultHero 
                pageTitle={pageData.title}
                pageDescription={pageData.description}
                buttonText1={pageData.buttonText1}
                buttonUrl1={pageData.buttonUrl1}
                buttonText2={pageData.buttonText2}
                buttonUrl2={pageData.buttonUrl2}
                buttonText3={pageData.buttonText3}
                buttonUrl3={pageData.buttonUrl3}
            ></DefaultHero>
            <div className="content-container">
                <ResumePDF resumeData={resumeData}></ResumePDF>
            </div>
        </div>
    )
}