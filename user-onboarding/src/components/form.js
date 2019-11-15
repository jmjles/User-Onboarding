import React from "react";
import { Container, Paper ,Typography as Font} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'
const axios = require("axios");

const Forms = () => {
  const infoSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      check: Yup.bool()
      .oneOf([true],'Please Accept The Terms of Service')
        .required('Required'),
    });
  const submit = (values, { setSubmitting }) => {
    

    (async () => {
      let res = await axios.post("https://reqres.in/api/users", {
        name: values.name,
        email: values.email
      });
      const {email, name} = res.data

      alert(`Post Success! \n Name: ${name} \n Email: ${email}`)
    })();
    setSubmitting(false);
  };

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          name: "",
          email: "",
          check: false
        }}
        validationSchema={infoSchema}
        onSubmit={submit}
      >
        {({ handleSubmit, values, handleChange ,errors}) => (
          <Form onSubmit={handleSubmit}>
            <Paper elevation={3}>
              {
                errors.name ? 
                <Font color='error'>{errors.name}</Font>:null
              }
              <Field
                type="text"
                name="name"
                placeholder="Name:"
                value={values.name}
              />
              <br />
              {
                errors.email ? 
                <Font color='error'>{errors.email}</Font>:null
              }
              <Field
                type="email"
                name="email"
                placeholder="Email:"
                value={values.email}
              />
              <br />
              {
                errors.check ? 
                <Font color='error'>{errors.check}</Font>:null
              }
              <span>I've read and agreed to the Terms of Service: </span>
              <Field type="checkbox" name="check" onChange={handleChange} />
              <br />
              <Field type="submit" name="submit" value="submit" />
            </Paper>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Forms;
