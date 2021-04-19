import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import HomePage from "./pages/homePage";
import ChangePasswordPage from "../../features/Login/pages/changePasswordPage";

function Home(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={HomePage} />
            <Route path={`${match.url}/login/changePassword`} component={ChangePasswordPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Home;