import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AdminProfile from "./pages/adminProfile";

Admin.propTypes = {};

 function Admin(props) {
    const match = useRouteMatch();
    console.log('match: ', match);

    return (
        <Switch>
            <Route exact path={match.url} component={AdminProfile} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Admin;