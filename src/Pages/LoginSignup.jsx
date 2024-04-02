import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [hide, setHide] = useState(true);

  const [name, setName] = useState("")
  const [isNameValid, setIsNameValid] = useState(false)
  const [NameErrorMessage, setNameErrorMessage] = useState(null)

  const [email, setEmail] = useState("")
  const [isEmailVaild, setIsEmailValid] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState(null)

  const [password, setPassword] = useState("")
  const [isValid, setIsValid] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null)

  const [submitErrorMessage, setSubmitErrorMessage] = useState("");

  const handleChangeForName = (event) => {
    const yourName = event.target.value;
    setName(yourName);

    setIsNameValid(validateName(yourName))

  }

  const handleBlurforName = () => {
    if (!name.trim()) {
      setNameErrorMessage("Full name is required")
    }
  }

  const validateName = (yourName) => {
    const minlength = 0;
    const nameMatch = /^[A-Za-z]*\s{1}[A-Za-z]*$/.test(yourName)
    const isLongEnough = yourName.length >= minlength

    return isLongEnough && nameMatch
  }


  const handleChangeForEmail = (event) => {
    const yourEmail = event.target.value;
    setEmail(yourEmail);

    setIsEmailValid(validateEmail(yourEmail))
  }

  const handleBlurforEmail = () => {
    if (!email.trim()) {
      setEmailErrorMessage("Valid Email is required")
    }
  }

  const validateEmail = (yourEmail) => {
    const minLength = 0;
    const emailMatch = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(yourEmail)
    const isLongEnough = yourEmail.length >= minLength;

    return isLongEnough && emailMatch

  }

  const handleBlurforPassword = () => {
    if (!password.trim()) {
      setPasswordErrorMessage(`Password must be at least 8 characters long and contain at least one upper case letter,
      one lowercase letter, one number, and one speacial character.`)
    }
  }
  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    setIsValid(validatePassword(newPassword))

  }

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?:{}|<>]/.test(password);
    const isLongEnough = password.length >= minLength;

    return hasUppercase && hasLowercase && hasNumbers && hasSpecialChars && isLongEnough;
  }





  function validateForm() {

    if (!isNameValid || !isEmailVaild || !isValid) {
      setSubmitErrorMessage("Please fix error to submit")
      setTimeout(() => { setSubmitErrorMessage("") }, 3000);

    }

  }



  return (
    <div className='loginsignup'>
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
      <div className='loginsignup-container'>

        <div className='header'>
          <h1>{action}</h1>
          <div className='underline'></div>
        </div>


        <div className='inputs'>

          {action === "Login" ? <></> :
            <div className='input'>
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder='Your Name' onBlur={handleBlurforName} value={name} onChange={handleChangeForName} />
              {isNameValid ? <span className='valid'><i class="fa-solid fa-circle-check"></i></span> : <span className='nameError'>{NameErrorMessage}</span>}
            </div>

          }

          <div className='input'>
            <i class="fa-solid fa-envelope"></i>
            <input type="Email" onBlur={handleBlurforEmail} placeholder='Email Address' value={email} onChange={handleChangeForEmail} />
            {isEmailVaild ? <span className='valid'><i class="fa-solid fa-circle-check"></i></span> : <span className='emailError'>{emailErrorMessage}</span>}
          </div>


          <div className='input'>
            <i class="fa-solid fa-lock"></i>
            <input className='passwordInput' value={password} onBlur={handleBlurforPassword} onChange={handleChange} type={hide ? "password" : "text"} placeholder='Password' />

            {isValid ? <span className='valid'><i class="fa-solid fa-circle-check"></i></span> : <span className='passwordError'>{passwordErrorMessage}</span>}
          </div>

          {action === "Sign Up" ? <div></div> :
            <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}

          <div className="main-submit-container">
            <div className={action === "Login" ? "none" : "block"} onClick={() => { setAction("Sign Up"); validateForm() }}>Sign Up</div>

            <div className={action === "Sign Up" ? "none" : "block"} onClick={() => { setAction("Login"); validateForm() }}>Login</div>

          </div>
          {action === "Sign Up" ? <span className='errormsg'>{submitErrorMessage}</span> : <></>}
          {action === "Login" ? <span className='errormsg'>{submitErrorMessage}</span> : <></>}
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
