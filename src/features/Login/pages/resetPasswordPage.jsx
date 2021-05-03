import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ResetPasswordForm from "../components/resetPasswordForm";
import { resetPassword } from "../loginSlice";
import './changePasswordPage.scss';

ResetPasswordPage.propTypes = {};

function ResetPasswordPage() {
    const login = useSelector(state=>state.login);
    const dispatch = useDispatch();
    const history = useHistory();

    let phoneNumber = localStorage.getItem('phoneNumber');
    phoneNumber = phoneNumber.replace('+84', '0');
    let {resetPassMessage} = login;

    const handleSubmit = (values) => {
        dispatch(resetPassword({
            phoneNumber: phoneNumber,
            new_password: values.confirm_password
        }));
    }

    useEffect(()=>{
        if(login.resetPassMessage == 'success'){
            window.location.replace('/login');
        }
    },[resetPassMessage]);

    return (
        <div className='change-password-form'>
            <ResetPasswordForm
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ResetPasswordPage;