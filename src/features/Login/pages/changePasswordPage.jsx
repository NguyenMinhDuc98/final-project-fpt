import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ChangePasswordForm from "../components/changePasswordForm";
import { changePassword } from "../loginSlice";
import './changePasswordPage.scss';

ResetPasswordPage.propTypes = {};

function ResetPasswordPage() {
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    const history = useHistory();

    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const { changePassMessage, loading, error } = login;
    const [failedMess, setFailedMess] = useState(null);

    const handleSubmit = (values, props) => {
        dispatch(changePassword({
            token: token,
            phoneNumber: user.phone,
            old_password: values.old_password,
            new_password: values.confirm_password
        }));

        if(!loading) props.isSubmitting = false;
    };

    console.log({changePassMessage});

    useEffect(() => {
        if (changePassMessage === 'success') {
            history.push('/');
        }
        else if (changePassMessage === 'failed') {
            setFailedMess(error);
        }
    }, [changePassMessage]);

    return (
        <div className='change-password-form'>
            <ChangePasswordForm
                onSubmit={handleSubmit}
                error={failedMess}
                loading={loading}
            />
        </div>
    )
}

export default ResetPasswordPage;