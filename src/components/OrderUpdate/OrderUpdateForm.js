import { useState } from "react";
import classes from "./OrderUpdateForm.module.css";
import { logo, password, user } from "../../index.js";

import { Form, Button, Row, Col } from "react-bootstrap";

const OrderUpdateForm = (props) => {
  /// INITIAL STATE INITIALIZE
  // Delivery
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("");
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
  const [enteredRecipientName, setEnteredRecipientName] = useState(
    props.recipientName
  );
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
  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
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
      status: enteredStatus,
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
    setEnteredStatus("");
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
        className="order-update-form register-user-item__register"
        onSubmit={submitHandler}
      >
        <Form.Group
          as={Row}
          className="order-update-form__date mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Control
              type="date"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__time mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Control
              type="time"
              min="08:00"
              max="17:00"
              onChange={timeChangeHandler}
              value={enteredTime}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__status mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={3}>
            <Form.Select
              aria-label="Default select example"
              value={enteredStatus}
              onChange={statusChangeHandler}
            >
              <option>Estado</option>
              <option value="1">Guardado</option>
              <option value="2">Cumplido</option>
              <option value="3">Cancelado</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="order-update-form__length mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control
              type="number"
              placeholder="Largo cm"
              value={enteredLength}
              onChange={lengthChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__width mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control
              type="number"
              placeholder="Ancho cm"
              value={enteredWidth}
              onChange={widthChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__height mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control
              type="number"
              placeholder="Alto cm"
              value={enteredHeight}
              onChange={heightChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__weight mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={2}>
            <Form.Control
              type="number"
              placeholder="Peso grs"
              value={enteredWeight}
              onChange={weightChangeHandler}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="order-update-form__delicate mb-3"
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
          className="order-update-form__sender-address mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Dirección recogida"
              value={enteredSenderAddress}
              onChange={senderAddressChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__sender-city mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Ciudad recogida"
              value={enteredSenderCity}
              onChange={senderCityChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__recipient-name mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Nombre completo destinatario"
              value={enteredRecipientName}
              onChange={recipientNameChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__recipient-id mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Cédula/Nit destinatario"
              value={enteredRecipientID}
              onChange={recipientIDChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__recipient-address mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Dirección entrega"
              value={enteredRecipientAddress}
              onChange={recipientAddressChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="order-update-form__recipient-city mb-3"
          controlId=""
        >
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Ciudad entrega"
              value={enteredRecipientCity}
              onChange={recipientCityChangeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="order-update-form__submit-button mb-3">
          <Col sm={{ span: 10, offset: 5 }}>
            <Button variant="outline-light" type="submit">
              Actualizar Órden
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OrderUpdateForm;
