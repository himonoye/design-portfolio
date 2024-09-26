import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './components/style_guide/layout';
import PortfolioHome from './components/pages/home/portfolioHome'
import PortfolioProject from './components/pages/project/portfolioProject';
import Resume from './components/pages/resume/resume';
import OutsideWork from './components/pages/outsideWork/outsideWork';
import ErrorPage from './components/pages/404/404';

//Import temporary project data
const pageData = require('./pageData.json');
const resumeData = require('./resumeData.json');

//Create root node for the website
const domNode = document.getElementById('portfolio');
const root = createRoot(domNode);

//Contsurct children routes
let childrenRoutes = [
  {
    //Home
    path: "/",
    element: <PortfolioHome pageData={pageData.pageInfo.portfolio} projectData={pageData.projectData}/>,
  },
  {
    //Resume
    path: "/resume",
    element: <Resume pageData={pageData.pageInfo.resume} resumeData={resumeData}/>,
  },
  {
    //Outside wORK
    path: "/outsidework",
    element: <OutsideWork pageData={pageData.pageInfo.outsideWork} gallery={pageData.outsideWorkGallery}/>,
  }
]

pageData.projectData.map((project, i, projectData)=>{
    childrenRoutes.push(
      {
        path: "/"+project.projectPageUrl,
        element: <PortfolioProject projectData={project} prevProjectData={projectData[i-1]?projectData[i-1]:projectData[projectData.length-1]} nextProjectData={projectData[i+1]?projectData[i+1]:projectData[0]}/>,
      }
    )
})

//Set up React router for the pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout headerData={pageData.headerData} footerData={pageData.footerData}/>,
    errorElement: <ErrorPage />,
    children: childrenRoutes,
  },
]);


// Render the pages
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const [data, setData] = useState('');

useEffect(() => {
  (async function () {
    const { text } = await( await fetch(`/api/auth`)).json();
    setData(text);
  })();
  console.log(data);
});
