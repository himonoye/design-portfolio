'use client'

import React from 'react'
import { GlobalNav, GlobalMobileNav } from '@/components/pages/general_sections/globalNav'
import About from '@/components/pages/about/About'
import pageData from '../../public/pageData.json'

export default function AboutPage() {
  return (
    <div className="container">
      <GlobalNav headerData={pageData.headerData} footerData={pageData.footerData}/>
      <GlobalMobileNav headerData={pageData.headerData} footerData={pageData.footerData}/>
      <About 
        pageData={pageData.pageInfo.about} 
        gallery={pageData.aboutGallery} 
        socialMedia={pageData.footerData.socials}
      />
    </div>
  )
}
