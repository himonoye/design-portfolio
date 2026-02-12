'use client'

import { GlobalNav, GlobalMobileNav } from '@/components/pages/general_sections/globalNav'
import PortfolioHome from '@/components/pages/home/portfolioHome'
import pageData from '../public/pageData.json'

export default function HomePage() {
  return (
    <div className="container">
      <GlobalNav headerData={pageData.headerData} footerData={pageData.footerData}/>
      <GlobalMobileNav headerData={pageData.headerData} footerData={pageData.footerData}/>
      <PortfolioHome 
        pageData={pageData.pageInfo.portfolio} 
        projectData={pageData.projectData}
        footerData={pageData.footerData}
      />
    </div>
  )
}
