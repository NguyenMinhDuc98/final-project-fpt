import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../components/Custom-field/inputField';
import logo from '../../../assets/images/logo-fixit.png';

ServiceForm.propTypes = {
    onSubmit: PropTypes.func
}

ServiceForm.defaultProps = {
    onSubmit: null
}

function ServiceForm(props) {
    const existedServiceName = props.serviceNameArr;

    console.log({existedServiceName})

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required')
        .lowercase()
        .notOneOf(existedServiceName, 'This service is existed'),
    })

    return (
        <div>
            <div className='list-major-image'>
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

                        return (
                            <Form>
                                <h2>Service</h2>
                                <FastField
                                    //Props cua FastField
                                    name='name'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Service name"
                                    placeholder="Enter major name"
                                />
                                <Button type="submit">
                                    {isSubmitting && <Spinner size='sm' />}
                                    Submit
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default ServiceForm;