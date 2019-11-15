import React from "react";
import { Container} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
const Forms = () => {
  return (
    <Container>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >

          {({setSubmitting}) =>(
              <Form>
                  <Field type='text' name='name' placeholder='Name:'/>
                  <Field type='email' name='email' placeholder='Email:'/>
                  <span>I've read and agreed to the Terms of Service: </span><Field type='checkbox'/>
                  <Field type='submit' name='submit' value='submit'/>
              </Form>
          )}
      </Formik>
    </Container>
  );
};
export default Forms;
