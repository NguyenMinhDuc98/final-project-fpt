import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../custom-field/inputField';
import logo from '../../../assets/images/user-logo.png';

RepairerForm.propTypes = {
    onSubmit: PropTypes.func
}

RepairerForm.defaultProps = {
    onSubmit: null
}

function RepairerForm(props) {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required'),

        phoneNumber: Yup.string().required('This field is required'),

        email: Yup.string().required('This field is required')
    })

    return (
        <div>
            <div className='list-repairer-image'>
                <img src={logo} alt='logo' />
            </div>
            <div className='form'>
                <Formik
                    initialValues={props.initialValues}
                    validationSchema={validationSchema}
                    // onSubmit={props.onSubmit}
                >
                    {formikProps => {
                        const { values, errors, touched, isSubmitting } = formikProps;
                        console.log({ values, errors, touched });

                        return (
                            <Form>
                                <h2>New Repairer</h2>
                                <FastField
                                    //Props cua FastField
                                    name='name'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer name"
                                    placeholder="Enter repairer name"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='phoneNumber'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer phone number"
                                    placeholder="Enter repairer phone number"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='email'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer email"
                                    placeholder="Enter repairer email"
                                />
                                {/* <Button type="submit">
                                    {isSubmitting && <Spinner size='sm' />}
                                    Submit
                                </Button> */}
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default RepairerForm;