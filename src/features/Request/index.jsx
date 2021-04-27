import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import RequestDetailPage from "./pages/requestDetailPage";
import RequestsPage from "./pages/requestsPage";

Major.propTypes = {};

function Major(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={RequestsPage} />
            <Route exact path={`${match.url}/detail/:requestId`} component={RequestDetailPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Major;