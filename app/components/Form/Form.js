import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";
import { Backdrop } from "@mui/material";

import "./Form.css";

const Form = () => {
  const [showLoader, setShowLoader] = useState(false);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setShowLoader(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        "user_sQAzV5TSzEF8mgproJKTN",
      );
      setShowLoader(false);
      e.target.reset();
      alert("Email have been successfully sent");
    } catch (error) {
      console.log(error);
      setShowLoader(false);
      alert("sorry some error occurred");
    }
  };

  return (
    <div className="form_container">
      {showLoader && (
        <Backdrop open={showLoader}>
          <CircularProgress
            thickness={2}
            style={{
              color: "#fff",
              width: "25rem",
              height: "25rem",
            }}
          />
        </Backdrop>
      )}{" "}
      <h3 className="form_heading about_heading">LET'S GET IN CONTACT.</h3>
      <form className="form" onSubmit={submitHandler}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          name="from_name"
        />
        <input
          className="input"
          type="text"
          placeholder="E-Mail"
          name="user_email"
        />
        <input
          className="input"
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="textarea"
          placeholder="Message"
          name="message"
        ></textarea>
        <button className="form_button" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Form;
