import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import LoginForm from "../components/loginForm";
import { loginRequest } from "../loginSlice";
import './loginPage.scss';

LoginPage.propTypes = {};

function LoginPage() {
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    const history = useHistory();
    const { message, loading } = login;
    const [failedMess, setFailedMess] = useState(null);

    const handleSubmit = (values, props) => {
        dispatch(loginRequest(values));
        if(!loading) props.isSubmitting = false;
    };

    useEffect(() => {
        if (message === 'is_logged_in') history.push('/');
        else if (message === 'login_failed') {
            setFailedMess('Incorrect phone number or password'); 
        }
    }, [message])

    return (
        <div className='login-form'>
            <LoginForm
                onSubmit={handleSubmit}
                error={failedMess}
                loading={loading}
            />
        </div>
    )
}

export default LoginPage;