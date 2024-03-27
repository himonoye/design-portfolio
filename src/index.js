import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './components/layout';
import Portfolio from './components/portfolio';
import PortfolioProject from './components/portfolioProject';
import Resume from './components/resume';
import About from './components/about';

//Import temporary project data
const pageData = require('./pageData.json');
const resumeData = require('./resumeData.json');

//-------------------- Azure Out of Box Code Starts --------------------//

// // Get environment variables from .env
// import * as dotenv from "dotenv";
// dotenv.config();

// // Get Cosmos Client
// import { CosmosClient } from "@azure/cosmos";

// // Provide required connection from environment variables
// const cosmosSecret = process.env.COSMOS_CONNECTION_STRING;

// // Authenticate to Azure Cosmos DB
// const cosmosClient = new CosmosClient(cosmosSecret);

// const databaseName = 'portfolio-projects';
// const containerName = 'projects';

// Direct - assumes database and container already exist
// const { database, statusCode } = await client.database(databaseName);
// if(statusCode < 400){
//     const { container, statusCode } = await database.container(containerName);
// }

// Query - assumes database and container already exist
// const { resources } = await cosmosClient.database(databaseName).containers
// .query({
//     query: `SELECT * FROM c where c.id ='1'`,
//     parameters: [
//     {
//         name: '1',
//         value: containerName
//     }
//     ]
// })
// .fetchAll();

// console.log(resources);

//-------------------- Azure Out of Box Code Ends --------------------//

//Create root node for the website
const domNode = document.getElementById('portfolio');
const root = createRoot(domNode);

//Set up React router for the pages
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

// Render the pages
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);