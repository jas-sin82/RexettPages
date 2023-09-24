import React, { useState } from "react";

import classes from "./Subscription.module.css";

const Subscription = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const url = process.env.REACT_APP_API_URL;

  const inputBlurHandler = () => {
    if (email.trim() === "") {
      setError(true && "Please enter your email");
      return;
    }
    if (!emailRegex.test(email)) {
      setError(true && "invalid email address");
      return;
    }
  };

  const inputHandler = (e) => {
    const data = e.target.value;
    setEmail(data);
    if (email.trim() !== "") {
      setError(false);
    }
  };

  const emailFormData = async () => {
    if (email.trim()) {
      setError(false);
      try {
        await fetch(`${url}/api/newsletter?email=${email}`).then((result) =>
          result.json().then((data) => console.log(data))
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError(true && "invalid email address");
      return;
    }
    emailFormData();
    setEmail("");
    setError(false);
  };

  return (
    <div className={classes.subscriptionBox}>
      <div className={classes.subscription}>
        <h1>Subscribe To Our Newsletter</h1>
        <p>Stay updated with latest Technology trends and topics with us.</p>
        {error ? <span className={classes.errorMessage}>{error}</span> : null}
        <form onSubmit={HandleFormSubmit} className={classes.contactForm}>
          <input
            onChange={inputHandler}
            className={
              error
                ? `${classes.input} ${classes.invalid}`
                : `${classes.input} `
            }
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            onBlur={inputBlurHandler}
          />

          <button className={classes.submit} type="submit">
            {" "}
            Subscribe
          </button>
        </form>

        <p>
          Rexett IT will use the information you provide on this form to be in
          touch with you and to provide updates and marketing.
        </p>
      </div>
    </div>
  );
};

export default Subscription;
