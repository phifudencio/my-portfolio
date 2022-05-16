import React, { useRef } from "react";
import "./Footer.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_GMAIL_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="footer-container">
      <div className="formDiv">
        <div className="h1">
          <h1>Contact Me</h1>
        </div>
        <Form className="form-txt" ref={form} onSubmit={sendEmail}>
          <Form.Group controlId="formBasic">
            <hr />
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="First Name"
                  name="First Name"
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Last Name"
                  name="Last Name"
                />
              </Col>
            </Row>
            <hr />

            <Form.Control
              type="email"
              size="sm"
              placeholder="email@email.com"
              name="email"
            />
            <Form.Text className="text-muted">
              I will never share your email with anyone else.
            </Form.Text>
            <hr />
            <Form.Control as="textarea" rows="3" name="message" />
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
