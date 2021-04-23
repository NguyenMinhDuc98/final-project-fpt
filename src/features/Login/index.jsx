import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import ResetPasswordPage from "./pages/resetPasswordPage";
import ChangePasswordPage from "./pages/changePasswordPage";
import GetVerifyCodePage from "./pages/getVerifyCodePage";
import LoginPage from "./pages/loginPage";

Login.propTypes = {};

function Login(props) {
    const match = useRouteMatch();
    console.log('match: ', match);

    return (
        <Switch>
            <Route exact path={match.url} component={LoginPage} />
            <Route exact path={`${match.url}/changePassword`} component={ChangePasswordPage} />
            <Route exact path={`${match.url}/resetPassword`} component={ResetPasswordPage} />
            <Route exact path={`${match.url}/getVerifyCode`} component={GetVerifyCodePage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Login;