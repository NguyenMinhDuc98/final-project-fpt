import { FastField, Form, Formik } from "formik";
import InputField from "../../../components/Custom-field/inputField";
import * as Yup from 'yup';
import { Button, Spinner } from "reactstrap";
import PropTypes from 'prop-types';
import React from 'react';

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
        phoneNumber: Yup.number()
            .required('This field is required!')
            .positive(),

        password: Yup.string()
            .required('This field is required!')
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting, setSubmitting } = formikProps;

                return (
                    <Form>
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
                        {
                            props.error
                                ? <p style={{ color: 'red' }}>{props.error}</p>
                                : <div></div>
                        }
                        <a href='/login/getVerifyCode'>Forgot password</a>
                        <Button type="submit">
                            {props.loading && <Spinner size='sm' />}
                            Login
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default LoginForm;