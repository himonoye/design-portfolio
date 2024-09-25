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
                buttonGroup={pageData.buttonGroup}
                scrollRef={resumeRef}
            ></DefaultHero>

            <div className="content-container" ref={resumeRef}>
                <ResumePDF resumeData={resumeData}></ResumePDF>
            </div>
        </div>
    )
}