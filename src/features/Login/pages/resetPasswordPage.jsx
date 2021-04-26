import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ResetPasswordForm from "../components/resetPasswordForm";
import { resetPassword } from "../loginSlice";
import './changePasswordPage.scss';

ResetPasswordPage.propTypes = {};

function ResetPasswordPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    let phoneNumber = localStorage.getItem('phoneNumber');
    phoneNumber = phoneNumber.replace('+84', '0');
    console.log({ phoneNumber })

    const handleSubmit = (values) => {
        dispatch(resetPassword({
            phoneNumber: phoneNumber,
            new_password: values.confirm_password
        }));

        return new Promise(resolve => {
            console.log('Submit: ', values);

            setTimeout(() => {
                history.push('/');
                resolve(true);
            }, 2000);
        });

    }

    return (
        <div className='change-password-form'>
            <ResetPasswordForm
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ResetPasswordPage;