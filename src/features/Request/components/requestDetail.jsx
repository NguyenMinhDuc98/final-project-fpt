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
                                    name='service'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Service"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='request_status'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Request status"
                                    disabled
                                />
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
                                    name='address'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Address"
                                    disabled
                                />
                                {
                                    props.request_statuses[0] && props.request_statuses[0].status_id != 1
                                        ? (
                                            <div>
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
                                            </div>
                                        )
                                        : (
                                            <div></div>
                                        )
                                }
                                <FastField
                                    //Props cua FastField
                                    name='request_issues_name'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Request issue name"
                                    disabled
                                />
                                <FastField
                                    //Props cua FastField
                                    name='description'
                                    component={InputField}

                                    //Props truyen vao trong InputField
                                    label="Description"
                                    disabled
                                />

                                {
                                    props.invoice
                                        ? (
                                            <div>
                                                <FastField
                                                    //Props cua FastField
                                                    name='cost_of_supplies'
                                                    component={InputField}

                                                    //Props truyen vao trong InputField
                                                    label="Cost of supplies"
                                                    disabled
                                                />
                                                <FastField
                                                    //Props cua FastField
                                                    name='other_cost'
                                                    component={InputField}

                                                    //Props truyen vao trong InputField
                                                    label="Other cost"
                                                    disabled
                                                />
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
                                        : (
                                            <div>
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
                                            </div>
                                        )
                                }

                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default RequestDetail;