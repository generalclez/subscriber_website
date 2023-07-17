import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Bell from "./assets/bell-860.png";
import Check from "./assets/check-mark.png";

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
            className="form bg-primary bg-opacity-50 rounded rounded-3"
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
              <div className="formLocation form-group">
                <input
                  type="country"
                  name="country"
                  className="form-control"
                  placeholder="Enter Country"
                  required
                  value={inputValues.country}
                  onChange={handleChange}
                />
              </div>
              <div className="formLocation form-group ">
                <input
                  type="state"
                  name="state"
                  className=" form-control ms-2"
                  placeholder="Enter State"
                  required
                  value={inputValues.state}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button
              className="btn1 fw-bold fs-5 mt-3"
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
            <img src={Check} alt="" />
            {""} Thank You!
            <p className="fw-bold mt-3">Subscribed Successfully!</p>
          </p>
          <Button className="btn1" onClick={handleGoBack} variant="warning">
            Okay!
          </Button>
        </div>
      )}
    </div>
  );
}

export default Form;
