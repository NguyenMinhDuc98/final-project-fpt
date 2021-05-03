import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import LoginForm from "../components/loginForm";
import { loginRequest } from "../loginSlice";
import './loginPage.scss';

LoginPage.propTypes = {};

function LoginPage() {
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    const history = useHistory();
    let { message } = login;
    let error = null;

    const handleSubmit = (values) => {
        dispatch(loginRequest(values));
    };

    useEffect(() => {
        if (message === 'is_logged_in') history.push('/');
        else if (message === 'login_failed') {
            error = 'username or password is incorrect';
            message = null;
            history.push('/login');
        }
    }, [message])

    return (
        <div className='login-form'>
            <LoginForm
                onSubmit={handleSubmit}
                error={error}
            />
        </div>
    )
}

export default LoginPage;