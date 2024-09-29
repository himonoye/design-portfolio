import React, { FormEventHandler, useState } from 'react';
import Button from '../../style_guide/button';


type passcodeFormProps = {
  userInput: string;
  setShowPortfolio: Function;
}

export default function PasscodeForm({userInput, setShowPortfolio}:passcodeFormProps) {
  //Temporary isPasscodeValid state
  const [isPasscodeValid, setIsPasscodeValid] = useState(false);
  if(isPasscodeValid) {
    setShowPortfolio(true);
  }

  //Init passcode state. this is where user input lives
  const [userPasscord, setUserPasscord] = useState("");

  //Init error state. This is where error message lives
  const [erroMsg, seterroMsg] = useState("No password yet.");
  
  //Function triggered when "Submit" button is clicked
  async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    let truePasscode = "1234";

    // Send user input to back end

    try{
      // If passcode matched then render
      if (truePasscode == userPasscord) {
        setShowPortfolio(true);
      } else {
        setIsPasscodeValid(false)
        seterroMsg("Incorrect password. Please try again.")
      }
    } catch(error) {
      console.error('Error occurred:', error);
    }
  }

  //Render Passcode collection form
  return (
    <div className="container">
      <div className="form-container">
        <form className="passcode-form" onSubmit={(event: React.FormEvent<HTMLFormElement>):void => {handleSubmit(event)}}>
          <div className="heading-lead">Password protected content</div>
          <div className="form-Inputs">
            <input
              className="body-large"
              type="password"
              value={userPasscord}
              onChange = {(event:React.ChangeEvent<HTMLInputElement>)=>{setUserPasscord(event.target.value);}}>
            </input>
            <div className="body-base">{erroMsg}</div>
            <button type="submit">
              <Button
                buttonText="Submit"
                style="button-primary"
                buttonType="event"
              >  
              </Button>
            </button>
          </div>  
        </form>
      </div>
    </div>
  )
}