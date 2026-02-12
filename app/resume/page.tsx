'use client'

import React from 'react'
import { GlobalNav, GlobalMobileNav } from '@/components/pages/general_sections/globalNav'
import Resume from '@/components/pages/resume/resume'
import pageData from '../../public/pageData.json'
import resumeData from '../../public/resumeData.json'

export default function ResumePage() {
  return (
    <div className="container">
      <GlobalNav headerData={pageData.headerData} footerData={pageData.footerData}/>
      <GlobalMobileNav headerData={pageData.headerData} footerData={pageData.footerData}/>
      <Resume 
        pageData={pageData.pageInfo.resume} 
        resumeData={resumeData}
      />
    </div>
  )
}
