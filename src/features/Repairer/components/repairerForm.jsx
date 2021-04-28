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
                                    label="Repairer name"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='phoneNumber'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer phone number"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='email'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer email"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='address'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer address"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='identity_card_number'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer identity card number"
                                />
                                <FastField
                                    //Props cua FastField
                                    name='major'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer's major"
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