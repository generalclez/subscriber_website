import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Bell from "./assets/bell-860.png";

function Form() {
  // State variables to control visibility, store input values and manage the alert
  const [showForm, setShowForm] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  // Function to toggle the visibility of form  and reset the alert state
  const toggleForm = () => {
    setShowForm(!showForm);
    setShowAlert(false);
  };

  // Function to update the input values as the user input details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, country, state } = inputValues;
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      country.trim() !== "" &&
      state.trim() !== ""
    ) {
      // Perform form submission logic here
      console.log("Form submitted:", inputValues);
      setInputValues({
        name: "",
        email: "",
        phone: "",
        country: "",
        state: "",
      });
      setShowAlert(true);
    }
  };

  // Function to reset the form state and hide the alert
  const handleGoBack = () => {
    setShowForm(false);
    setShowAlert(false);
  };

  return (
    <div>
      {/* Rendering the text and toggle button */}
      {!showForm && !showAlert && (
        <div>
          <p>
            To continuously receive The Glory Journal publication monthly,
            kindly click the subscribe button below.
          </p>
          <Button
            className="btn1 fw-bolder fs-4 mt-3"
            variant="warning"
            onClick={toggleForm}
          >
            Subscribe {""} <img src={Bell} alt="" />
          </Button>
        </div>
      )}

      {/* Rendering the form */}
      {showForm && !showAlert && (
        <div>
          <div>
            <h3>Sign up now!</h3>
            <p>To stay updated with The Glory Journal publication monthly.</p>
          </div>
          <form
            className="form bg-success bg-opacity-25"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Fullname"
                required
                value={inputValues.name}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email Address"
                required
                value={inputValues.email}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter Phone Number"
                required
                value={inputValues.phone}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="formLocation">
              <div className="form-group">
                <input
                  type="location"
                  name="location"
                  className="form-control"
                  placeholder="Enter Country"
                  required
                  value={inputValues.country}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group ms-2">
                <input
                  type="location"
                  name="location"
                  className="form-control"
                  placeholder="Enter State"
                  required
                  value={inputValues.state}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button
              className="fw-bold fs-5 mt-3"
              variant="warning"
              type="submit"
            >
              Submit!
            </Button>
          </form>
        </div>
      )}

      {/* Rendering the alert */}
      {showAlert && (
        <div className="success">
          <p className="sub">
            Thank You!
            <p className="fw-bold">Subscribed Successfully!</p>
          </p>
          <Button onClick={handleGoBack} variant="warning">
            Okay!
          </Button>
        </div>
      )}
    </div>
  );
}

export default Form;
