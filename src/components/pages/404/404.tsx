import React, { useEffect }  from 'react';
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: unknown = useRouteError();

  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  if (error) {
    console.error(error);
  }
  
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
