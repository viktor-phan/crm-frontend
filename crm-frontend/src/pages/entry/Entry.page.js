import React, { useState } from "react";

import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import "./entry.style.css";

export const Entry = () => {
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
//     <div className="entry-page">
//     <Jumbotron className="form-box">
//         {formLoad === 'login' && 
//        <LoginForm handleOnChange= {handleOnChange} 
//        handleOnSubmit={handleOnSubmit}
//        formSwitcher={formSwitcher}
//        email={email}
//        pass={password}/>}
//        {formLoad === 'reset' &&<ResetPassword handleOnChange= {handleOnChange} 
//        handleOnResetSubmit={handleOnResetSubmit}
//        formSwitcher={formSwitcher}
//        email={email}
//        />}
       
//     </Jumbotron>
//     <img src="https://www.thoughtco.com/thmb/Y0u9dMhdSXvKQh10yOBoUu-C7vk=/3435x2576/smart/filters:no_upscale()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg"
//      width="400px" alt="background"></img>
//  </div>
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && <LoginForm formSwitcher={formSwitcher} />}

        {frmLoad === "rest" && (
          <ResetPassword
            // handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            // email={email}
          />
        )}
      </Jumbotron>
    <img src="https://www.thoughtco.com/thmb/Y0u9dMhdSXvKQh10yOBoUu-C7vk=/3435x2576/smart/filters:no_upscale()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg"
    width="400px" alt="background"></img>
    </div>
  );
};
