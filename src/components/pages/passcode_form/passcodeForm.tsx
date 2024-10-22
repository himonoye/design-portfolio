import React, { useState } from 'react';
import Button from '../../style_guide/button';
import { InfoIcon } from '../../icons/utilityIcons';

type passwordFormProps = {
  setShowPortfolio: Function;
}

export default function PasswordForm({setShowPortfolio}:passwordFormProps) {

  //Init password state. this is where user input lives
  const [userPassword, setUserPassword] = useState("");

  //Init error state. This is where error message lives
  const [erroMsg, setErroMsg] = useState("");
  
  // Send user input to back end
  async function sendPassword(){
    try{

      const postData = new FormData();
      postData.append('userPassword', userPassword);

      //Post Request
      const response = await fetch('/api/authSitePasscode', {
        method: "POST",
        body: userPassword,
      })

      //Check for non-200 response
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      //Parse data
      const data = await response.json()

      //return the isPasswordValid boolean
      return data.isPasswordValid;

      //catch any error
    } catch(error) {
      console.log('Error occurred:', error);
    }
  }

  //Clear error message after user start typing again
  function clearErroMsg(){
    setErroMsg("");
  }

  //Function triggered when "Submit" button is clicked
  async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    if (userPassword){
    
      //Show that http request is sent and waiting on a response in UI
      setErroMsg("Validating...This may take up to 10 seconds as the site connects to the on-demand backend services. Thank you for your patience!")
        
      //Call sendPassword funtion to send a HTTP request
      const isValid = await sendPassword();

      // If user password and the site password matches
      // then render the home page
      // Otherwise show error messa
      if (isValid) {
        setShowPortfolio(true);
      } else {
        setErroMsg("Password incorrect. Please try again.")
      } 

    } else {
      setErroMsg("Please enter a password.")
    }
  }

  //Render password collection form
  return (
    <div className="content-container">
      <div className="project-section-container">
        <div className="project-section-heading-container">
          <div className="heading-sub">{"The details of this project is password protected."}</div>
          <div className="body-base">Enter the password below or contact me directly via mingxinye1128@gmail.com or LinkedIn. I will DM you the password!</div>
          <form className="form-body" 
                onSubmit={(event: React.FormEvent<HTMLFormElement>):void => {
                  handleSubmit(event);
                  }}>
            <div className="form-Inputs">
              <input
                className="form-input-field"
                type="password"
                value={userPassword}
                onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                  setUserPassword(event.target.value);
                  clearErroMsg();
                  }}>
              </input>
            {erroMsg?
            <div className="form-feedback-container">
              <div className="form-error-message"><InfoIcon/><div className="body-small">{erroMsg}</div></div>
            </div>:""}
            </div>
            <button type="submit">
              <Button
                buttonText="Enter"
                style="button-primary"
                buttonType="other"
              > 
              </Button>
            </button> 
          </form>
        </div>
      </div>
    </div>
  )
}