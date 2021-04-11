import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import CustomersPage from "./pages/customersPage";
import EditCustomerPage from "./pages/editCustomerPage";

Major.propTypes = {};

function Major(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={CustomersPage} />

            {/* Major route */}
            <Route exact path={`${match.url}/edit/:id`} component={EditCustomerPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Major;