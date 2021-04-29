import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import InputField from '../../../components/Custom-field/inputField';

RequestDetail.propTypes = {
    onSubmit: PropTypes.func
}

RequestDetail.defaultProps = {
    onSubmit: null
}

function RequestDetail(props) {
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
                                <h3>Request detail</h3>
                                <FastField
                                    //Props cua FastField
                                    name='customerName'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Customer name"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='customerPhone'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Customer phone number"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='repairerName'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer name"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='repairerPhone'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Repairer phone number"
                                    disabled
                                />
                                
                                <FastField
                                    //Props cua FastField
                                    name='city'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="City"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='district'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="District"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='address'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Address"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='service'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Service"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='estimate_time'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Estimate time (minutes)"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='estimate_price'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Estimate price (VND)"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='request_issues_name'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Request issue name"
                                    disabled
                                />
                                {
                                    props.invoice
                                        ? (
                                            <div>
                                                <FastField
                                                    //Props cua FastField
                                                    name='invoice_total_price'
                                                    component={InputField}

                                                    //Props truyen vao trong InputField
                                                    label="Invoice total price"
                                                    disabled
                                                />
                                                <FastField
                                                    //Props cua FastField
                                                    name='invoice_status'
                                                    component={InputField}

                                                    //Props truyen vao trong InputField
                                                    label="Invoice status"
                                                    disabled
                                                />
                                            </div>
                                        )
                                        : (<div></div>)
                                }
                                <FastField
                                    //Props cua FastField
                                    name='request_status'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Request status"
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

export default RequestDetail;