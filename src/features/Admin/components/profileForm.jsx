import { FastField, Form, Formik } from "formik";
import InputField from "../../../components/Custom-field/inputField";
// ../../../components/
import * as Yup from 'yup';
import { Button, Spinner } from "reactstrap";
import PropTypes from 'prop-types';
import React from 'react';

ProfileForm.propTypes = {
    onSubmit: PropTypes.func
}

ProfileForm.defaultProps = {
    onSubmit: null
}

function ProfileForm(props) {
    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.number('You must enter number').required('This field is required!'),

        password: Yup.string().required('This field is required!'),
    })

    return (
        <Formik
            initialValues={props.initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <h2>Admin profile</h2>

                        <FastField
                            //Props cua FastField
                            name='name'
                            component={InputField}

                            //Props truyen vao trong InputField
                            label="Name"
                            placeholder="Enter your phone number"
                        />
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
                            name='email'
                            component={InputField}

                            //Props truyen vao trong InputField
                            label="Email"
                            placeholder="Enter your phone number"
                        />
                        <Button type="submit">
                            {isSubmitting && <Spinner size='sm' />}
                            Edit
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default ProfileForm;
