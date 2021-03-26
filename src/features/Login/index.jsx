import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import LoginPage from "./pages/loginPage";

Login.propTypes = {};

 function Login(props) {
    const match = useRouteMatch();
    console.log('match: ', match);

    return (
        <Switch>
            <Route path={match.url} component={LoginPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Login;