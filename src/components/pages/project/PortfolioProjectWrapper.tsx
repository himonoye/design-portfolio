'use client'

import React, { useState } from 'react'
import ShowPortfolioProject from '@/components/pages/project/portfolioProject'

export default function PortfolioProjectWrapper({ currentProject, prevProject, nextProject }: any ) {
  const [showPortfolio, setShowPortfolio] = useState(false)
  return (
    <div className="container">
      <ShowPortfolioProject
        needPassword={currentProject.needPassword}
        showPortfolio={showPortfolio}
        setShowPortfolio={setShowPortfolio}
        projectData={currentProject}
        prevProjectData={prevProject}
        nextProjectData={nextProject}
      />
    </div>
  )
}
