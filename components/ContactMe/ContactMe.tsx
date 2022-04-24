import React from "react";
import { useInputValidation } from "../../hooks/useInputValidation";
import classes from "./ContactMe.module.css";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    handleInputChange: handleEmailInputChange,
    handleInputBlur: handleEmailInputBlur,
    reset: resetEmail,
  } = useInputValidation((value: string) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value
    )
  );

  const {
    value: enteredText,
    isValid: textIsValid,
    hasError: textAreaHasError,
    handleInputChange: handleTextAreaChange,
    handleInputBlur: handleTextAreaBlur,
    reset: resetText,
  } = useInputValidation((value: string) => value.trim() !== "");

  let formIsValid = false;

  if (emailIsValid && textIsValid) {
    formIsValid = true;
  }

  const handleFormSubmission = (e: any) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const templateParams = { email: enteredEmail, message: enteredText };

    emailjs
      .send(
        "service_ms914op",
        "template_0vmypcf",
        templateParams,
        "DXXSl3gil8qaW5PtE"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    resetEmail();
    resetText();
  };

  const emailInputClasses = emailInputHasError ? classes.invalid : "";
  const textInputClasses = textAreaHasError ? classes.invalid : "";

  return (
    <section id="contactme" className={classes.container}>
      <div className={classes.topContainer}>
        <h2>Contact me</h2>
        <span>Whether you have a question or just want to say hi.</span>
        <span>I'll try my best to get back to you!</span>
      </div>
      <div className={classes.bottomContainer}>
        <h3>Get in touch using the form below </h3>
        <form onSubmit={handleFormSubmission} className={classes.formContainer}>
          <input
            className={emailInputClasses}
            value={enteredEmail}
            onChange={handleEmailInputChange}
            onBlur={handleEmailInputBlur}
            type="email"
            placeholder="Email"
          />

          <textarea
            className={textInputClasses}
            value={enteredText}
            onChange={handleTextAreaChange}
            onBlur={handleTextAreaBlur}
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button disabled={!formIsValid} type="submit">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
