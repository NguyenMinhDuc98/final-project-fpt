import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import LoginForm from "../components/loginForm";
import { loginRequest } from "../loginSlice";
import './loginPage.scss';

LoginPage.propTypes = {};

function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const imgUrl = '../../../assets/images/login-background.png'
    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')'
    };

    const handleSubmit = (values) => {
        dispatch(loginRequest(values));

        return new Promise(resolve => {
            setTimeout(() => {
                history.push('/');
                resolve(true);
            }, 3000);
        });
    }

    return (
        <div className='login-form' style={divStyle}>
            <LoginForm
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default LoginPage;