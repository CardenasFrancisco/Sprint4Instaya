import React, { useState } from "react";
import "./OrderRegisterForm.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { logo, password, user } from "../../index.js";

const OrderRegisterForm = (props) => {
  /// INITIAL STATE INITIALIZE
  // Delivery
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  // Package
  const [enteredLength, setEnteredLength] = useState("");
  const [enteredWidth, setEnteredWidth] = useState("");
  const [enteredHeight, setEnteredHeight] = useState("");
  const [enteredWeight, setEnteredWeight] = useState("");
  const [enteredDelicate, setEnteredDelicate] = useState("");
  // Sender
  const [enteredSenderAddress, setEnteredSenderAddress] = useState("");
  const [enteredSenderCity, setEnteredSenderCity] = useState("");
  // Recipient
  const [enteredRecipientName, setEnteredRecipientName] = useState("");
  const [enteredRecipientID, setEnteredRecipientID] = useState("");
  const [enteredRecipientAddress, setEnteredRecipientAddress] = useState("");
  const [enteredRecipientCity, setEnteredRecipientCity] = useState("");

  /// EVENT LISTENER & PARTIAL STORAGE
  // Delivery
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };
  // Package
  const lengthChangeHandler = (event) => {
    setEnteredLength(event.target.value);
  };
  const widthChangeHandler = (event) => {
    setEnteredWidth(event.target.value);
  };
  const heightChangeHandler = (event) => {
    setEnteredHeight(event.target.value);
  };
  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };
  const delicateChangeHandler = (event) => {
    setEnteredDelicate(event.target.value);
  };
  // Sender
  const senderAddressChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredSenderAddress(event.target.value); //event listener and store state
  };
  const senderCityChangeHandler = (event) => {
    setEnteredSenderCity(event.target.value);
  };
  // Recipient
  const recipientNameChangeHandler = (event) => {
    setEnteredRecipientName(event.target.value);
  };
  const recipientIDChangeHandler = (event) => {
    setEnteredRecipientID(event.target.value);
  };
  const recipientAddressChangeHandler = (event) => {
    setEnteredRecipientAddress(event.target.value);
  };
  const recipientCityChangeHandler = (event) => {
    setEnteredRecipientCity(event.target.value);
  };
  /// FORM SUBMIT BUTTON
  const submitHandler = (event) => {
    event.preventDefault(); // Prevents HTTP Request and Page Reloading when submitting form data
    const orderData = {
      date: new Date(enteredDate),
      time: enteredTime,
      length: enteredLength,
      width: enteredWidth,
      height: enteredHeight,
      weight: enteredWeight,
      delicate: enteredDelicate,
      senderAddress: enteredSenderAddress,
      senderCity: enteredSenderCity,
      recipientName: enteredRecipientName,
      recipientID: enteredRecipientID,
      recipientAddress: enteredRecipientAddress,
      recipientCity: enteredRecipientCity,
    }; // Retrieves Form Data
    // console.log(orderData); // TODO Testing Only

    props.onSaveOrderData(orderData); // Communicates UP, Child to Parent, sending orderData

    /// Reset Order Form State - Two Way Binding
    setEnteredDate("");
    setEnteredTime("");
    setEnteredLength("");
    setEnteredWidth("");
    setEnteredHeight("");
    setEnteredWeight("");
    setEnteredDelicate("");
    setEnteredSenderAddress("");
    setEnteredSenderCity("");
    setEnteredRecipientName("");
    setEnteredRecipientID("");
    setEnteredRecipientAddress("");
    setEnteredRecipientCity("");
  };

  return (
    <div>
      <Form
        className="order-register-form register-user-item__register"
        onSubmit={submitHandler}
      >
        <Form.Group
          as={Row}
          className="order-register-form__date mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Control
              type="date"
              value={enteredDate} // Two-way Binding
              onChange={dateChangeHandler}
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__hour mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Control
              type="time"
              value={enteredTime}
              onChange={timeChangeHandler}
              min="08:00"
              max="17:00"
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="order-register-form__length mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control
              type="number"
              value={enteredLength}
              onChange={lengthChangeHandler}
              placeholder="Largo cm"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__width mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control
              type="number"
              value={enteredWidth}
              onChange={widthChangeHandler}
              placeholder="Ancho cm"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__height mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control
              type="number"
              value={enteredHeight}
              onChange={heightChangeHandler}
              placeholder="Alto cm"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__weight mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control
              type="number"
              value={enteredWeight}
              onChange={weightChangeHandler}
              placeholder="Peso grs"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__delicate mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Select
              aria-label="Default select example"
              value={enteredDelicate}
              onChange={delicateChangeHandler}
            >
              <option>Delicado/No Delicado</option>
              <option value="1">Delicado</option>
              <option value="2">No Delicado</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__sender-address mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={enteredSenderAddress}
              onChange={senderAddressChangeHandler}
              placeholder="Dirección recogida"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__sender-city mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={enteredSenderCity}
              onChange={senderCityChangeHandler}
              placeholder="Ciudad recogida"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__recipient-name mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={enteredRecipientName}
              onChange={recipientNameChangeHandler}
              placeholder="Nombre destinatario"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__recipient-id mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={enteredRecipientID}
              onChange={recipientIDChangeHandler}
              placeholder="Cédula/Nit destinatario"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__recipient-address mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={enteredRecipientAddress}
              onChange={recipientAddressChangeHandler}
              placeholder="Dirección entrega"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__recipient-city mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={enteredRecipientCity}
              onChange={recipientCityChangeHandler}
              placeholder="Ciudad entrega"
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-register-form__submit-button mb-3"
        >
          <Col sm={{ span: 10, offset: 5 }}>
            <Button variant="outline-light" type="submit">
              Crear Órden
            </Button>
          </Col>
        </Form.Group>
      </Form>
      ;
    </div>
  );
};
export default OrderRegisterForm;
