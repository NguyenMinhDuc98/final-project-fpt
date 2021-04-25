import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import InputField from '../../../components/Custom-field/inputField';

RepairerForm.propTypes = {
    onSubmit: PropTypes.func
}

RepairerForm.defaultProps = {
    onSubmit: null
}

function RepairerForm(props) {
    return (
        <div>
            <div className='form'>
                <Formik
                    initialValues={props.initialValues}
                >
                    {formikProps => {
                        const { values, errors, touched } = formikProps;
                        console.log({values, errors, touched})

                        return (
                            <Form>
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
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default RepairerForm;