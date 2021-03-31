import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../custom-field/inputField';


AddMajorForm.propTypes = {
    onSubmit: PropTypes.func
}

AddMajorForm.defaultProps = {
    onSubmit: null
}

function AddMajorForm(props) {
    const initialValues = {
        major: '',
        image: ''
    }

    const validationSchema = Yup.object().shape({
        major: Yup.string().required('This field is required'),

        image: Yup.string().required('This field is required')
    })

    return (
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
                            name='major'
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
    )
}

export default AddMajorForm;