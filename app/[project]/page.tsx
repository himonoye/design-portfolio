import { GlobalNav, GlobalMobileNav } from '@/components/pages/general_sections/globalNav'
import PortfolioProjectWrapper  from '@/components/pages/project/PortfolioProjectWrapper'
import ErrorPage from '../not-found'
import pageData from '../../public/pageData.json'

export async function generateStaticParams() {
  return pageData.projectData.map((project: any) => ({
    project: project.projectPageUrl
  }))
}

export default async function ProjectPage({ params }: { params: { project: string } }) {
  
  // Extract the project parameter from the URL
  const { project } = await params;

  // Find the current project and its neighbors
  const projectIndex = pageData.projectData.findIndex(
    (p: any) => p.projectPageUrl === project
  )
  
  if (projectIndex === -1) {
    return <ErrorPage />
  }
  
  const currentProject = pageData.projectData[projectIndex]
  const prevProject = projectIndex > 0 
    ? pageData.projectData[projectIndex - 1] 
    : pageData.projectData[pageData.projectData.length - 1]
  const nextProject = projectIndex < pageData.projectData.length - 1 
    ? pageData.projectData[projectIndex + 1] 
    : pageData.projectData[0]

  return (
    <div className="container">
      <GlobalNav headerData={pageData.headerData} footerData={pageData.footerData}/>
      <GlobalMobileNav headerData={pageData.headerData} footerData={pageData.footerData}/>
      <PortfolioProjectWrapper
        currentProject={currentProject}
        prevProject={prevProject}
        nextProjectData={nextProject}
      />
    </div>
  )
}
