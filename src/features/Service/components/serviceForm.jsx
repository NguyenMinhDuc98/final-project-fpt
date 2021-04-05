import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../custom-field/inputField';
import logo from '../../../assets/images/logo-fixit.png';

MajorForm.propTypes = {
    onSubmit: PropTypes.func
}

MajorForm.defaultProps = {
    onSubmit: null
}

function MajorForm(props) {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required'),
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
                        console.log({ values, errors, touched });

                        return (
                            <Form>
                                <h2>New Service</h2>
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

export default MajorForm;