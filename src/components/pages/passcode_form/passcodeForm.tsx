import React, { useState } from 'react';
import Link from '../../style_guide/link';
import Button from '../../style_guide/button';
import ThreeDots from '../../icons/threeDots';

type passwordFormProps = {
  formHeading: string;
  setShowPortfolio: Function;
}

export default function PasswordForm({formHeading, setShowPortfolio}:passwordFormProps) {

  //Declare infoIcon;
  const InfoIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M466-306h28v-214h-28v214Zm14-264q8.5 0 14.25-5.75T500-590q0-8.5-5.75-14.25T480-610q-8.5 0-14.25 5.75T460-590q0 8.5 5.75 14.25T480-570Zm.17 438q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
    )
  }

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
      setErroMsg("Validating...This may take up to 10 seconds as the site connect to the backend services. Thank you for your patience!")
        
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
    <div className="body-container">
      <div className="form-container">
        <Link linkText="Back to Home" style="link-primary" url=".." hasLeftIcon={true} hasRightIcon={false}/>
        <div className="hero-heading-container">
          <div className="heading-lead">{formHeading + " (Password Required)"}</div>
          <div className="body-large">To view my portfolio projects, please enter the password below. If you don’t have the password yet, feel free to reach out to me directly at mingxinye1128@gmail.com or on LinkedIn. I look forward to connecting with you!</div>
        </div>
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
  )
}