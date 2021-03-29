import { FastField, Form, Formik } from "formik";
import InputField from "../../../custom-field/inputField";
import * as Yup from 'yup';
import { Button } from "reactstrap";
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loggingIn } from "../loginSlice";

LoginForm.propTypes = {
    onSubmit: PropTypes.func
}

LoginForm.defaultProps = {
    onSubmit: null
}

function LoginForm(props) {
    const initialValues = {
        phoneNumber: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.number('You must enter number').required('This field is required!'),

        password: Yup.string().required('This field is required!'),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit.props}
        >
            {formikProps => {
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <p>Welcome back</p>
                        <h2>Login to your account</h2>
                        <FastField
                            //Props cua FastField
                            name='phoneNumber'
                            component={InputField}

                            //Props truyen vao trong InputField
                            label="Phone Number"
                            placeholder="Enter your phone number"
                        />
                        <FastField
                            //Props cua FastField
                            name='password'
                            component={InputField}

                            //Props truyen vao trong InputField
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                        />
                        <Button type="submit">Login</Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default LoginForm;