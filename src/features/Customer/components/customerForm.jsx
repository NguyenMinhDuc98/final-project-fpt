import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../components/Custom-field/inputField';
import logo from '../../../assets/images/user-logo.png';

CustomerForm.propTypes = {
    onSubmit: PropTypes.func
}

CustomerForm.defaultProps = {
    onSubmit: null
}

function CustomerForm(props) {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required'),

        phoneNumber: Yup.string().required('This field is required'),

        email: Yup.string().required('This field is required')
    })

    return (
        <div>
            <div className='list-customer-image'>
                <img src={logo} alt='logo' />
            </div>
            <div className='form'>
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
                                <h2>Edit Customer</h2>
                                <FastField
                                    //Props cua FastField
                                    name='name'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Customer name"
                                    placeholder="Enter customer name"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='phoneNumber'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Customer phone number"
                                    placeholder="Enter customer phone number"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='email'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Customer email"
                                    placeholder="Enter customer email"
                                />
                                <Button type="submit">
                                    {isSubmitting && <Spinner size='sm' />}
                                    Save
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default CustomerForm;