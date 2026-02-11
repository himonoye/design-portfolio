import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './appComponent/app';

//Import temporary project data
import pageData from './pageData.json'; 
import resumeData from './resumeData.json'; 

//Create root node for the website
const domNode = document.getElementById('portfolio');

hydrateRoot(
  domNode,
  <React.StrictMode>
    <App pageData={pageData} resumeData={resumeData}></App>
  </React.StrictMode>
);

//Create root node for the website
// const domNode = document.getElementById('portfolio');
// const root = createRoot(domNode);

// root.render(
//   <React.StrictMode>
//       <App pageData={pageData} resumeData={resumeData}></App>
//   </React.StrictMode>
// );