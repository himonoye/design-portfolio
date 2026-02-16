import React from 'react';
import { LogoBox} from '../../icons/utilityIcons';

type workExperienceEntryProps = {
	jobTitle: string;
    companyName: string;
    year: string;
    jobSummary: string[];
}


type projectExperienceEntryProps = {
	projectTitle: string;
    companyName: string;
    year: string;
    projectSummary: string[];
}

type contactEntryProps = {
	isLast: boolean;
    entryDetails: string[];
}

type profileEntryProps = {
	entryTitle: string;
    entryDetails: string[];
}

type profileSectionProps = {
	sectionTitle: string;
    sectionDetails: string[];
}

type resumePDFProps = {
    resumeData:any
}

const ContactSection = ({sectionDetails}:any) => {
    return (
        <div className="resume-entry-container horizontal">
            <div className="resume-contact-list-container">
                {sectionDetails.map((item:any, i:number)=>{
                    return <ContactEntry isLast={i === sectionDetails.length - 1} entryDetails={item.entryDetails} key={i} ></ContactEntry>
                })}
            </div>
        </div>
    )
}

const WorkExperienceEntry = ({jobTitle, companyName, year, jobSummary}:workExperienceEntryProps) => {
    return (
        <div className="resume-entry-container">
            <div className="resume-heading-container">
                <div className="resume-flag">{jobTitle}</div>
                <div className="resume-base">{companyName}<span className="resume-divider">|</span>{year}</div>
            </div>
            {jobSummary?<ul>
                            {jobSummary.map((item:any, i:number)=>{
                                return <li className="resume-base" key={i}>{item}</li>
                            })}
                        </ul>:""}
        </div>
    )
}

const ProjectExperienceEntry = ({projectTitle, companyName, year, projectSummary}:projectExperienceEntryProps) => {
    return (
        <div className="resume-entry-container">
            <div className="resume-heading-container">
                <div className="resume-flag">{projectTitle}</div>
                <div className="resume-base">{companyName}<span className="resume-divider">|</span>{year}</div>
            </div>
            <ul>
                {projectSummary.map((item:any, i:number)=>{
                    return <li className="resume-base" key={i}>{item}</li>
                })}
            </ul>
        </div>
    )
}


const ProfileSection = ({sectionTitle, sectionDetails}:profileSectionProps) => {
    return (
        <div className="resume-section-container">
            <div className="resume-head">{sectionTitle}</div>
            <div className="resume-profile-list-container">
                {sectionDetails.map((item:any, i:number)=>{
                    return <ProfileEntry entryTitle={item.entryTitle} entryDetails={item.entryDetails} key={i} ></ProfileEntry>
                })}
            </div>
        </div>
    )
}

const ProfileEntry = ({entryTitle, entryDetails}:profileEntryProps) => {
    return (
        <div className="resume-entry-container horizontal">
            <div className="resume-base-bold">{entryTitle}:</div><div className="resume-base">{entryDetails}</div>
            {/* <div className="resume-base">{entryDetails}</div> */}
        </div>
    )
}

const ContactEntry = ({isLast, entryDetails}:contactEntryProps) => {
    return (
        <div className="resume-base-bold">{entryDetails}{!isLast && " ·"}</div>
    )
}

export default function ResumePDF({resumeData}:resumePDFProps) {
    return (
        <div id="resume-container">
            <div className="resume-intro-container">
                <div className="resume-lead">{resumeData.name}</div>
                <div className="resume-sub">{resumeData.title} · {resumeData.statement}</div>
                <ContactSection sectionDetails={resumeData.contact}></ContactSection>
            </div>
            <div className="resume-section-container">
                <div className="resume-head">Work Experience</div>
                <div className="resume-experiences-list-container">
                    {resumeData.workExperience.map((item:any, i:number)=>{
                        return <WorkExperienceEntry 
                                    key={i}
                                    jobTitle={item.jobTitle}
                                    companyName={item.companyName}
                                    year={item.year}
                                    jobSummary={item.jobSummary}>
                                </WorkExperienceEntry>
                    })}
                </div>
            </div>
            {resumeData.profileSummary.map((item:any, i:number)=>{
                return <ProfileSection key={i} sectionTitle={item.sectionTitle} sectionDetails={item.sectionDetails}></ProfileSection>
            })}
            <div className="resume-section-container">
                <div className="resume-head">Work Projects</div>
                <div className="resume-projects-list-container">
                    {resumeData.projectExperience.map((item:any, i:number)=>{
                        return <ProjectExperienceEntry 
                                    key={i}
                                    projectTitle={item.projectTitle}
                                    companyName={item.companyName}
                                    year={item.year}
                                    projectSummary={item.projectSummary}>
                                </ProjectExperienceEntry>
                    })}
                </div>
            </div>
        </div>
    )
}