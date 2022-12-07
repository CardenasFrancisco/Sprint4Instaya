import React, { useState } from "react";
import "./LoginItem.css";
import { logo, password, user } from "../../index.js";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";

const LoginItem = (props) => {
  //INITIAL STATE INITIALIZE
  // Login
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // INPUT VALIDATION
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  // Not Empty
  const enteredEmailIsValid = enteredEmail.trim() !== ""; // if the entered value is not empty
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  //FORM VALIDATION
  // Check Valid
  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  // EVENT LISTENER & PARTIAL STORAGE
  // Login
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const passwordBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };
  // FORM SUBMIT BUTTON
  const submitHandler = (event) => {
    event.preventDefault(); // Prevents HTTP Request and Page Reloading when submitting form data
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (!enteredEmailIsValid) {
      return;
    }

    if (!enteredPasswordIsValid) {
      return;
    }

    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(loginData);
    // props.onSaveLoginData(loginData);
    // Reset Order Form State - Two Way Binding
    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredPassword("");
    setEnteredPasswordTouched(false);
  };

  return (
    <div className="login-item d-flex justify-content-center align-items-center">
      <header className="login-item__header">
        <img src={logo} className="login-item__logo" alt="Logo" />
      </header>

      <Form className="login" onSubmit={submitHandler}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputIsInvalid && (
              <p>
                El correo ingresado es incorrecto. Favor validar e ingresar
                nuevamente.
              </p>
            )}
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Col sm={1}>
            <img src={password} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordInputIsInvalid && (
              <p>
                La contraseña ingresada es incorrecta. Favor validar e ingresar
                nuevamente.
              </p>
            )}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 5 }}>
            <Button
              variant="outline-light"
              type="submit"
              disabled={!formIsValid}
            >
              <Link to="/orders">Sign in</Link>
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <Link
        variant="link"
        className="orders__button-create"
        to="../register-user"
      >
        Registrarme
      </Link>
    </div>
  );
};

export default LoginItem;
