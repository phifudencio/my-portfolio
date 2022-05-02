import React from "react";
import "./Footer.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="footer-container">
      <div className="formDiv">
        <div className="h1">
          <h1>Contact Me</h1>
        </div>
        <Form className="form-txt">
          <Form.Group controlId="formBasic">
            <hr />
            <Row>
              <Col>
                <Form.Control type="text" size="sm" placeholder="First Name" />
              </Col>
              <Col>
                <Form.Control type="text" size="sm" placeholder="Last Name" />
              </Col>
            </Row>
            <hr />

            <Form.Control type="email" size="sm" placeholder="email@email.com" />
            <Form.Text className="text-muted">
              I will never share your email with anyone else.
            </Form.Text>
            <hr />
            <Form.Control as="textarea" rows="3"  />
            <hr></hr>
            <Button className="button" variant="secondary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Footer;
