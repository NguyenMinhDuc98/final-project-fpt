import { FastField, Form, Formik } from "formik";
import InputField from "../../../components/Custom-field/inputField";
import * as Yup from 'yup';
import { Button, Spinner } from "reactstrap";
import PropTypes from 'prop-types';
import React from 'react';

ResetPasswordForm.propTypes = {
    onSubmit: PropTypes.func
}

ResetPasswordForm.defaultProps = {
    onSubmit: null
}

function ResetPasswordForm(props) {
    const initialValues = {
        new_password: '',
        confirm_password: ''
    }

    const validationSchema = Yup.object().shape({
        new_password: Yup.string()
            .required('This field is required!'),
            // .matches(
            //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // ),
        confirm_password: Yup.string()
            .required('This field is required!')
            .oneOf([Yup.ref('new_password'), null], 'Password must match'),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <h2>Reset Password</h2>
                        <FastField
                            //Props cua FastField
                            name='new_password'
                            component={InputField}

                            //Props truyen vao trong InputField
                            type="password"
                            label="New password"
                            placeholder="Enter your new password"
                        />
                        <FastField
                            //Props cua FastField
                            name='confirm_password'
                            component={InputField}

                            //Props truyen vao trong InputField
                            type="password"
                            label="Confirm password"
                            placeholder="Confirm your password"
                        />
                        <Button type="submit">
                            {isSubmitting && <Spinner size='sm'/>}
                            Reset Password
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default ResetPasswordForm;