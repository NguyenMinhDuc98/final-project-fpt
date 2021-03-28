import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

SelectField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

function SelectField(props) {
    const {
        field, form,
        type, label, placeholder, disabled
    } = props;

    const { name } = field;

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                // name={name}
                // value={value}
                // onChange={onChange}
                // onBlur={onBlur}
                {...field} // Tương ứng với phần comment trên

                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
        </FormGroup>
    )
}

export default SelectField;