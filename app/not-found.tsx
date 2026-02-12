import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import React from 'react';


export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist. Please check the URL or return to the homepage.',
  authors: [{ name: 'Ming Ye' }],
}

export default function ErrorPage() {

  return (  
      <div className="body-container">
        <div className="project-hero-container">
          <div className="hero-container">
            <div className="project-heading-container">
              <div className="heading-lead">Sorry something went wrong</div>
              <p className="body-large">Try again by going to another page.</p>
            </div>
          </div>
        </div>
      </div>
  )
}
