import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../components/Custom-field/inputField';
import logo from '../../../assets/images/logo-fixit.png';

IssueForm.propTypes = {
    onSubmit: PropTypes.func
}

IssueForm.defaultProps = {
    onSubmit: null
}

function IssueForm(props) {

    const existedIssueName = props.issueNameArr;

    console.log({existedIssueName})

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .lowercase()
            .required('This field is required')
            .notOneOf(existedIssueName, 'This issue is existed'),
        estimate_fix_duration: Yup.number().required('This field is required'),
        estimate_price: Yup.number().required('This field is required'),
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
                                <h2>Issue</h2>
                                <FastField
                                    //Props cua FastField
                                    name='name'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Issue name"
                                    placeholder="Enter issue name"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='estimate_fix_duration'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Estimate fix duration"
                                    placeholder="Enter Estimate fix duration"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='estimate_price'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Estimate price"
                                    placeholder="Enter Estimate price"
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

export default IssueForm;