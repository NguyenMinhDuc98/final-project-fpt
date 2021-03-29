import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import LoginForm from "../components/loginForm";
import { getToken } from "../loginSlice";
import './loginPage.scss';

LoginPage.propTypes = {};

function LoginPage() {
    const userState = useSelector(state => state.login)
    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Submit: ', values);

            setTimeout(() => {
                const login = getToken(values);
                dispatch(login);
                console.log('userState: ', userState.isLoggedIn);
                history.push('/');
                resolve(true);
            }, 2000);
        })
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