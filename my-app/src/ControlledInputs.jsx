import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function FormComponent() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    resume: null,
    about: "",
  });

  const handleChanges = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setValues({ ...values, [name]: files[0] });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DEBUG: Form submission triggered!");
    console.log("Form values:", JSON.stringify(values, null, 2));
    console.log("Form submitted!", values);
  };

  const handleReset = () => {
    setValues({
      username: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
      resume: null,
      about: "",
    });
  };

  return (
    <>
      <h1>Registration form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={values.username}
          onChange={handleChanges}
        ></input>

        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={values.email}
          onChange={handleChanges}
        ></input>

        <label htmlFor="contact"> Contact: </label>
        <input
          type="text"
          id="contact"
          name="contact"
          required
          value={values.contact}
          onChange={handleChanges}
        ></input>

        <fieldset>
          <legend>Gender</legend>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={values.gender === "male"}
            onChange={handleChanges}
          ></input>

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={values.gender === "female"}
            onChange={handleChanges}
          ></input>

          <label htmlFor="other">Other</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={values.gender === "other"}
            onChange={handleChanges}
          ></input>
        </fieldset>

        <label htmlFor="subject">Subject</label>
        <select
          id="subject"
          name="subject"
          value={values.subject}
          onChange={handleChanges}
        >
          <option value="maths">Maths</option>
          <option value="english">English</option>
          <option value="biology">Biology</option>
          <option value="chemistry">Chemistry</option>
        </select>

        <label htmlFor="resume">choose file</label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleChanges}
        ></input>

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          rows="4"
          cols="50"
          value={values.about}
          required
          onChange={handleChanges}
        ></textarea>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<FormComponent />);
