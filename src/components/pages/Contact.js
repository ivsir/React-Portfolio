import React, { useState } from "react";
import "../../styles/Contact.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../../src/utils/helpers.js";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name || !message) {
      setErrorMessage("Please fill in all of the fields");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div id="contact">
      <main>
        <div id="contact-wrapper">
          <h1 id="guestName">
            Hello {name}. Enter your contact information below.
          </h1>
          <form className="form">
            <input
              id="email"
              class="formBox"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
            />

            <input
              id="name"
              class="formBox"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />
            <input
              id="message"
              class="formBox"
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
            />
            <button id="submit" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p id="error" className="error-text">
                {errorMessage}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Form;
