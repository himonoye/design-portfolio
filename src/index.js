import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './components/layout';
import Portfolio from './components/portfolio';
import PortfolioProject from './components/portfolioProject';
import Resume from './components/resume';
import About from './components/about';


const domNode = document.getElementById('portfolio');
const root = createRoot(domNode);

const pageData = require('./pageData.json');
const resumeData = require('./resumeData.json');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout headerData={pageData.headerData}/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Portfolio pageData={pageData.root.portfolio} projectData={pageData.projectData}/>,
      },
      {
        path: "/resume",
        element: <Resume pageData={pageData.root.resume} resumeData={resumeData}/>,
      },
      {
        path: "/about",
        element: <About pageData={pageData.root.about}/>,
      },
      {
        path: "/projectExample",
        element: <PortfolioProject projectData={pageData.projectData[0]}/>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);