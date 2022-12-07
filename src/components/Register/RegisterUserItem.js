import "./RegisterUserItem.css";
import { logo, password, user } from "../../index.js";
import { Form, Button, Row, Col } from "react-bootstrap";

function RegisterUserItem() {
  return (
    <div className="register-user-item d-flex justify-content-center align-items-center">
      <header className="register-user-item__header">
        <img src={logo} className="register-user-item__logo" alt="Logo" />
      </header>
      <Form className="register-user-item__register">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col sm={1}>
            <img src={user} alt="Logo"></img>
          </Col>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Full Name" />
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
            <Form.Control type="password" placeholder="Password" />
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
            <Form.Control type="password" placeholder="Confirm Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 5 }}>
            <Button variant="outline-light" type="submit">
              Register
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default RegisterUserItem;
