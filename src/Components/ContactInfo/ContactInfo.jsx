import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "./../Button";

import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import "./ContactInfo.scss";

const validationSchema = Yup.object().shape({
  select: Yup.string().required("*Select any value"),
  fname: Yup.string().required("*First name is Required"),
  lname: Yup.string().required("*Last name is Required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
});

const ContactInfo = () => {
  return (
    <div id="contact-info">
      <h2 className="choose-amount">Contact information</h2>
      <Formik
        initialValues={{ select: "", fname: "", lname: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
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
          <Form.Group controlId="formGridState" onSubmit={handleSubmit}>
            <Row noGutters className="mt-2">
              <Col md={5}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="select"
                  as="select"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.select}
                  className={touched.select && errors.select ? "error" : null}
                  defaultValue="Choose..."
                >
                  <option>Mr.</option>
                  <option>Mis</option>
                </Form.Control>
                {touched.select && errors.select ? (
                  <div className="error-message">{errors.select}</div>
                ) : null}
              </Col>
            </Row>
            <Row noGutters className="mt-3">
              <Col md={5}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  name="fname"
                  type="text"
                  placeholder="Max"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fname}
                  className={touched.fname && errors.fname ? "error" : null}
                />
                {touched.fname && errors.fname ? (
                  <div className="error-message">{errors.fname}</div>
                ) : null}
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  name="lname"
                  type="text"
                  placeholder="Mustermann"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lname}
                  className={touched.lname && errors.lname ? "error" : null}
                />
                {touched.lname && errors.lname ? (
                  <div className="error-message">{errors.lname}</div>
                ) : null}
              </Col>
            </Row>
            <Row noGutters className="mt-3">
              <Col md={5}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="max.mustermann@mail.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? "error" : null}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
                ) : null}
              </Col>
            </Row>
            <div className="d-flex align-items-center mt-3 switch-icon">
              <Switch
                size="medium"
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
              <p className="news ml-3">Get newsletter</p>
            </div>
            <div className="d-flex align-items-center mt-3 switch-icon">
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
              <p className="news ml-3">Get donation receipt</p>
            </div>
            <Button
              text={"Next"}
              to="/form_c1_address"
              disabled={isSubmitting}
            />
          </Form.Group>
        )}
      </Formik>
    </div>
  );
};

export default ContactInfo;
