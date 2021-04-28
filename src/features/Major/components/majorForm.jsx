import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../components/Custom-field/inputField';
import logo from '../../../assets/images/logo-fixit.png';

MajorForm.propTypes = {
    onSubmit: PropTypes.func
}

MajorForm.defaultProps = {
    onSubmit: null
}

function MajorForm(props) {
    const existedMajorName = props.majorNameArr;

    console.log({existedMajorName})

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('This field is required')
        .lowercase()
        .notOneOf(existedMajorName, 'This major is existed'),
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
                                <h2>Major</h2>
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

export default MajorForm;