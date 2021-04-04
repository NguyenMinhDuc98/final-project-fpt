import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../custom-field/inputField';
import logo from '../../../assets/images/logo-fixit.png';

AddMajorForm.propTypes = {
    onSubmit: PropTypes.func
}

AddMajorForm.defaultProps = {
    onSubmit: null
}

function AddMajorForm(props) {
    const initialValues = {
        name: '',
        image: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required'),

        image: Yup.string().required('This field is required')
    })

    return (
        <div>
            <div className='list-major-image'>
                <img src={logo} alt='logo' />
            </div>
            <div className='form'>
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
                                <h2>New Major</h2>
                                <FastField
                                    //Props cua FastField
                                    name='name'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Major name"
                                    placeholder="Enter major name"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='image'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Image"
                                    type="file"
                                    placeholder="Upload image"
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

export default AddMajorForm;