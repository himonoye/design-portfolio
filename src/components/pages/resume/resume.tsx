import React from 'react';
import { useRef } from 'react';
import DefaultHero from '../general_sections/defaultHero';
import ResumePDF from './resumePDF';

type resumeProps = {
	pageData: any, 
    resumeData: any
}

export default function Resume({pageData, resumeData}:resumeProps) {
    return (
        <div className="body-container">
            <DefaultHero 
                pageTitle={pageData.title}
                pageDescription={pageData.description}
                buttonGroup={pageData.buttonGroup}
                scrollTo="resume-content"
            ></DefaultHero>

            <div id = "resume-content" className="content-container">
                <ResumePDF resumeData={resumeData}></ResumePDF>
            </div>
        </div>
    )
}