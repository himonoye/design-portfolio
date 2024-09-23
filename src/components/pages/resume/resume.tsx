import React from 'react';
import { useRef } from 'react';
import DefaultHero from '../general_sections/defaultHero';
import ResumePDF from './resumePDF';

type resumeProps = {
	pageData: any, 
    resumeData: any
}

export default function Resume({pageData, resumeData}:resumeProps) {
    const resumeRef = useRef();
    return (
        <div className="body-container">
            <DefaultHero 
                pageTitle={pageData.title}
                pageDescription={pageData.description}
                buttonScrollText={pageData.buttonScrollText}
                scrollRef={resumeRef}
                buttonText1={pageData.buttonText1}
                buttonUrl1={pageData.buttonUrl1}
                buttonText2={pageData.buttonText2}
                buttonUrl2={pageData.buttonUrl2}
                buttonText3={pageData.buttonText3}
                buttonUrl3={pageData.buttonUrl3}
            ></DefaultHero>
            <div className="content-container" ref={resumeRef}>
                <ResumePDF resumeData={resumeData}></ResumePDF>
            </div>
        </div>
    )
}