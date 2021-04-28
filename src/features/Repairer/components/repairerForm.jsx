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

                        return (
                            <Form>
                                <FastField
                                    //Props cua FastField
                                    name='name'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    disabled
                                    label="Repairer name"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='phoneNumber'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    disabled
                                    label="Repairer phone number"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='email'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    disabled
                                    label="Repairer email"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='city'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    disabled
                                    label="City"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='district'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    disabled
                                    label="District"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='address'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    disabled
                                    label="Address"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='identity_card_number'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer identity card number"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='major'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer's major"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='verify'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer's status"
                                    disabled
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