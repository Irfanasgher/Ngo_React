import React from "react";
import { Radio } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "./../Button";

import "./Payment.scss";
const validationSchema = Yup.object().shape({
  cardNumber: Yup.string().required("*Card number is Required"),
  selectCountry: Yup.string().required("*Select any Value"),
  select: Yup.string().required("*Select any Value"),
  cvcNumber: Yup.string().required("*CVC number Required"),
});

const Payment = () => {
  return (
    <div id="payment">
      <h2 className="choose-amount mb-3">Payment</h2>
      <Formik
        initialValues={{
          cardNumber: "",
          selectCountry: "",
          select: "",
          cvcNumber: "",
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form.Group controlId="formGridEmail">
            <Radio.Group defaultValue="large" buttonStyle="solid">
              <Radio.Button value="large">
                <div className="d-flex justify-content-between align-items-center h-100 w-100">
                  <Image src="/images/credit.png" />
                  <p className="credit-card">Credit Card</p>
                </div>
              </Radio.Button>
              <Radio.Button value="large1">
                <div className="d-flex justify-content-between align-items-center h-100 w-100">
                  <Image src="/images/paypal.png" />
                  <p className="credit-card">Paypal</p>
                </div>
              </Radio.Button>
            </Radio.Group>
            <Row noGutters className="mt-3">
              <Col md={7}>
                <Form.Label>Credit card numer</Form.Label>
                <Form.Control
                  name="cardNumber"
                  type="text"
                  placeholder="23773 37732 7373 23773 28"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cardNumber}
                  className={
                    touched.cardNumber && errors.cardNumber ? "error" : null
                  }
                />
                {touched.cardNumber && errors.cardNumber ? (
                  <div className="error-message">{errors.cardNumber}</div>
                ) : null}
              </Col>
            </Row>
            <Row noGutters className="mt-3">
              <Col md={7}>
                <Row>
                  <Col md={4}>
                    <Form.Label>Valid until</Form.Label>
                    <Form.Control
                      name="selectCountry"
                      as="select"
                      defaultValue="Choose..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.selectCountry}
                      className={
                        touched.selectCountry && errors.selectCountry
                          ? "error"
                          : null
                      }
                    >
                      <option>Monat</option>
                      <option>Pakistan</option>
                      <option>England</option>
                    </Form.Control>
                    {touched.selectCountry && errors.selectCountry ? (
                      <div className="error-message">
                        {errors.selectCountry}
                      </div>
                    ) : null}
                  </Col>
                  <Col md={{ span: 4 }}>
                    <Form.Label style={{ visibility: "hidden" }}>
                      Country
                    </Form.Label>
                    <Form.Control
                      name="select"
                      as="select"
                      defaultValue="Choose..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.select}
                      className={
                        touched.select && errors.select ? "error" : null
                      }
                    >
                      <option>Jahr</option>
                      <option>Pakistan</option>
                      <option>England</option>
                    </Form.Control>
                    {touched.select && errors.select ? (
                      <div className="error-message">{errors.select}</div>
                    ) : null}
                  </Col>
                  <Col md={4}>
                    <Form.Label>CVC</Form.Label>
                    <Form.Control
                      name="cvcNumber"
                      type="number"
                      placeholder="323"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cvcNumber}
                      className={
                        touched.cvcNumber && errors.cvcNumber ? "error" : null
                      }
                    />
                    {touched.cvcNumber && errors.cvcNumber ? (
                      <div className="error-message">{errors.cvcNumber}</div>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Button text={"Next"} to="/form_c1_done" />
          </Form.Group>
        )}
      </Formik>
    </div>
  );
};

export default Payment;
