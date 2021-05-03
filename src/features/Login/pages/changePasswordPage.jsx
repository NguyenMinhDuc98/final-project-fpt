import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router";
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
    let { changePassMessage } = login;
    let error = null;
    let location = useLocation();

    console.log({location});

    const handleSubmit = (values) => {
        dispatch(changePassword({
            token: token,
            phoneNumber: user.phone,
            old_password: values.old_password,
            new_password: values.confirm_password
        }));
    };

    console.log({changePassMessage});

    useEffect(() => {
        if (changePassMessage === 'success') {
            window.location.replace('/');
        }
        else if (changePassMessage === 'failed') {
            error = 'Old password incorrect';
            window.location.reload();
        }
        
    }, [changePassMessage])

    return (
        <div className='change-password-form'>
            <ChangePasswordForm
                onSubmit={handleSubmit}
                error={error}
            />
        </div>
    )
}

export default ResetPasswordPage;