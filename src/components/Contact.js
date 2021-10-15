import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Contact() {
  return (
    <div
      class="w3-container w3-light-grey"
      style={{ padding: "128px 16px" }}
      id="contact"
    >
      <h3 class="w3-center">CONTACT</h3>
      <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
      <div style={{ marginTop: "48px" }}>
        <p>
          <i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
          Chicago, US
        </p>
        <p>
          <i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone:
          +00 151515
        </p>
        <p>
          <i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i>{" "}
          Email: mail@mail.com
        </p>
        <br></br>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          validate={(values) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if (!values.name) {
              errors.name = "Name Required";
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "Valid Email Required";
            }
            if (!values.subject) {
              errors.subject = "Subject Required";
            }
            if (!values.message) {
              errors.message = "Message Required";
            }
            return errors;
          }}
        >
          {() => (
            <Form>
              <p>
                <input
                  class="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  required
                  name="Name"
                />
              </p>
              <label htmlFor="name">Name: </label>
              <Field ClssName="w3-input w3-border" name="name" />
              <p>
                <ErrorMessage name="name" />

                <div ClassName="w3-input w3-border">
                  <label htmlFor="email">Email: </label>
                  <Field name="email" />
                </div>
              </p>
              <ErrorMessage name="email" />

              <div ClassName="w3-input w3-border">
                <label htmlFor="email">Email: </label>
                <Field name="email" />
              </div>
              <div ClassName="w3-input w3-border">
                <label htmlFor="email">Email: </label>
                <Field name="email" />
              </div>
              <label htmlFor="subject">Subject: </label>
              <Field name="sybject" />
              <ErrorMessage name="subject" />

              <label htmlFor="message">Message: </label>
              <Field name="message" component="textarea" />
              <ErrorMessage name="message" />

              <button type="submit">Send</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
