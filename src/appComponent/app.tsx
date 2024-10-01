import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from '../components/style_guide/layout';
import PortfolioHome from '../components/pages/home/portfolioHome'
import ShowPortfolioProject from '../components/pages/project/portfolioProject';
import Resume from '../components/pages/resume/resume';
import About from '../components/pages/about/About';
import ErrorPage from '../components/pages/404/404';

type appProps = {
  pageData: any;
  resumeData: any;
}

export default function App({pageData, resumeData}:appProps) {

  const [showPortfolio, setShowPortfolio] = useState(false);


  //Contsurct children routes
  let childrenRoutes = [
    {
      //Error
      path: "*",
      index: true, 
      element: <ErrorPage/>,
    },
    {
      //Home
      path: "/",
      index: true, 
      element: <PortfolioHome pageData={pageData.pageInfo.portfolio} projectData={pageData.projectData}/>
    },
    {
      //Resume
      path: "/resume",
      element: <Resume pageData={pageData.pageInfo.resume} resumeData={resumeData}/>,
    },
    {
      //About
      path: "/about",
      element: <About pageData={pageData.pageInfo.about} gallery={pageData.aboutGallery}/>
    },
  ]

  pageData.projectData.map((project:any, i:number, projectData:any)=>{
      childrenRoutes.push(
        {
          path: "/"+project.projectPageUrl,
          element: <ShowPortfolioProject
                    needPassword={projectData[i].needPassword}
                    showPortfolio={showPortfolio}
                    setShowPortfolio={setShowPortfolio}
                    projectData={project}
                    prevProjectData={projectData[i-1]?projectData[i-1]:projectData[projectData.length-1]}
                    nextProjectData={projectData[i+1]?projectData[i+1]:projectData[0]}/> 
        }
      )
  })

  //Set up React router for the pages
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage/>,
      path: "/",
      element: <Layout headerData={pageData.headerData} footerData={pageData.footerData}/>,
      children: childrenRoutes
    },
  ]);

  return (
    <RouterProvider router={router} />
  )

}