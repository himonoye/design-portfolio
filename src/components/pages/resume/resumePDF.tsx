import React from 'react';

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

const WorkExperienceEntry = ({jobTitle, companyName, year, jobSummary}:workExperienceEntryProps) => {
    return (
        <div className="resume-job-container">
            <div className="resume-sub">{jobTitle}</div>
            <div className="resume-base">{companyName}<span className="resume-divider">|</span>{year}</div>
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
        <div className="resume-project-entry-container">
            <div className="resume-flag">{projectTitle}</div>
            <div className="resume-base">{companyName}<span className="resume-divider">|</span>{year}</div>
            <ul>
                {projectSummary.map((item:any, i:number)=>{
                    return <li className="resume-base" key={i}>{item}</li>
                })}
            </ul>
        </div>
    )
}

const ProfileEntry = ({entryTitle, entryDetails}:profileEntryProps) => {
    return (
        <div className="resume-profile-entry-container">
            <div className="resume-flag">{entryTitle}</div>
            <div className="resume-base">{entryDetails}</div>
        </div>
    )
}

const ProfileSection = ({sectionTitle, sectionDetails}:profileSectionProps) => {
    return (
        <div className="resume-profile-container">
            <div className="resume-head">{sectionTitle}</div>
            {sectionDetails.map((item:any, i:number)=>{
                return <ProfileEntry entryTitle={item.entryTitle} entryDetails={item.entryDetails} key={i} ></ProfileEntry>
            })}
        </div>
    )
}

const ContactSection = () => {
    return (
        <div className="resume-profile-container">
            <div className="resume-head">Contact</div>
            <div className="resume-contact-container">
                <div className="resume-contact-entry-container">
                    <div className="resume-brow">Email:</div>
                    <div className="resume-base">mingxinye1128@gmail.com</div>
                </div>
                <div className="resume-contact-entry-container">
                    <div className="resume-brow">Website:</div>
                    <div className="resume-base">mingxinye.com</div>
                </div>
            </div>
        </div>
    )
}

export default function ResumePDF({resumeData}:resumePDFProps) {
    return (
        <div id="resume-container">
            <div className="resume-top-container">
                <div className="resume-left-container">
                    <div className="resume-heading-container">
                        <div className="resume-lead">Mingxin Ye</div>
                        <p className="resume-base">{resumeData.summary}</p>
                    </div>
                    <div className="resume-work-experience-container">
                        <div className="resume-head">Experience</div>
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
                <div className="resume-right-container">
                    <ContactSection></ContactSection>
                    {resumeData.profileSummary.map((item:any, i:number)=>{
                        return <ProfileSection key={i} sectionTitle={item.sectionTitle} sectionDetails={item.sectionDetails}></ProfileSection>
                    })}
                
                </div>
            </div>
            <div className="resume-bottom-container">
                <div className="resume-head">Project Experience</div>
                <div className="resume-project-container">
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