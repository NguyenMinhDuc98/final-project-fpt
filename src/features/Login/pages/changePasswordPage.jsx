import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
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

    const handleSubmit = (values) => {
        dispatch(changePassword({
            token: token,
            phoneNumber: user.phone,
            old_password: values.old_password,
            new_password: values.confirm_password
        }));

        return new Promise(resolve => {
            console.log('Submit: ', values);

            setTimeout(() => {
                if (login.error == null) {
                    history.push('/');
                    console.log('success')
                } else {
                    history.push('/login/changePassword');
                    console.log('failed')
                }
                resolve(true);
            }, 3000);
        });
    };

    return (
        <div className='change-password-form'>
            <ChangePasswordForm
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ResetPasswordPage;