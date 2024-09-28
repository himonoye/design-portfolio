import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import Layout from '../components/style_guide/layout';
import PortfolioHome from '../components/pages/home/portfolioHome'
import PortfolioProject from '../components/pages/project/portfolioProject';
import Resume from '../components/pages/resume/resume';
import OutsideWork from '../components/pages/outsideWork/outsideWork';
import ErrorPage from '../components/pages/404/404';

//Import temporary project data
// const pageData = require('./pageData.json');
// const resumeData = require('./resumeData.json');

type appProps = {
  pageData: any;
  resumeData: any;
}

export default function App({pageData, resumeData}:appProps) {

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
      //Outside work
      path: "/outsidework",
      element: <OutsideWork pageData={pageData.pageInfo.outsideWork} gallery={pageData.outsideWorkGallery}/>
    },
  ]


  pageData.projectData.map((project:any, i:number, projectData:any)=>{
      childrenRoutes.push(
        {
          path: "/"+project.projectPageUrl,
          element: <PortfolioProject projectData={project} prevProjectData={projectData[i-1]?projectData[i-1]:projectData[projectData.length-1]} nextProjectData={projectData[i+1]?projectData[i+1]:projectData[0]}/>
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






// const [data, setData] = useState('');

// useEffect(() => {
//   (async function () {
//     const { text } = await( await fetch(`/api/auth`)).json();
//     setData(text);
//   })();
//   console.log(data);
// });
