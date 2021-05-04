import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import CustomersPage from "./pages/customersPage";

Major.propTypes = {};

function Major(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={CustomersPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Major;