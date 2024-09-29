import React, { FormEventHandler, useState } from 'react';
import Button from '../../style_guide/button';


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

  }

  //Render password collection form
  return (
    <div className="container">
      <div className="form-container">
        <div className="heading-lead">Welcome! Please enter password to view my portfolio site.</div>
        <form className="password-form" onSubmit={(event: React.FormEvent<HTMLFormElement>):void => {handleSubmit(event)}}>
          <div className="form-Inputs">
            <input
              className="input-field"
              type="password"
              value={userPassword}
              onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
                setUserPassword(event.target.value);
                clearErroMsg();}}>
            </input>
            <button type="submit">
              <Button
                buttonText="Enter"
                style="button-primary"
                buttonType="event"
              > 
              </Button>
            </button>
          </div>  
          <div className="body-base">{erroMsg}</div>
        </form>
      </div>
    </div>
  )
}