import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import LoginForm from "../components/loginForm";
import { loggingIn } from "../loginSlice";
import './loginPage.scss';

LoginPage.propTypes = {};

function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmit = (values) => {
        console.log('Submit: ', values);
        dispatch(loggingIn(values));

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