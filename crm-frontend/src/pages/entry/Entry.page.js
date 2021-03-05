import React,  {useState} from 'react'
import {Jumbotron} from 'react-bootstrap';
import "./entry.style.css";
import {LoginForm} from "../../components/login/Login.comp"
import {ResetPassword} from "../../components/password-reset/PasswordReset.comp"
export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formLoad, setFormLoad] = useState("login");

    const handleOnChange =  (e) => {
        const{name, value} = e.target;
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;    
        }
      
    };

    const handleOnSubmit = e =>{
        e.preventDefault();
        if (!email || !password){
            alert("Fill up all the form");
        }

        //TODO call api to submit the form
        console.log(email, password);
        
    };
    const handleOnResetSubmit = e => {
        e.preventDefault();
        if (!email){
            alert("Fill up the email");
        }
         //TODO call api to submit the form
         console.log(email);
    };
    const formSwitcher = formType => {
        setFormLoad(formType);
    };

    return (
        <div className="entry-page">
           <Jumbotron className="form-box">
               {formLoad === 'login' && 
              <LoginForm handleOnChange= {handleOnChange} 
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
              email={email}
              pass={password}/>}
              {formLoad === 'reset' &&<ResetPassword handleOnChange= {handleOnChange} 
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
              email={email}
              />}
              
           </Jumbotron>
           <img src="https://www.thoughtco.com/thmb/Y0u9dMhdSXvKQh10yOBoUu-C7vk=/3435x2576/smart/filters:no_upscale()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg"
            width="400px" alt="background"></img>
        </div>
    )
}
