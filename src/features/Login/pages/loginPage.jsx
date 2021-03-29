import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import LoginForm from "../components/loginForm";
import { getToken, loggingIn } from "../loginSlice";
import './loginPage.scss';

LoginPage.propTypes = {};

function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmit = (values) => {
        console.log('Submit: ', values);
        // dispatch(loggingIn(values));
        dispatch(getToken(values));
        console.log('getToken: ', getToken(values));

        history.push('/');
    }

    return (
        <div className='login-form'>
            <LoginForm
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default LoginPage;