import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import RepairerProfilePage from "./pages/repairerProfilePage";
import RepairersPage from "./pages/repairersPage";

Major.propTypes = {};

function Major(props) {
    const match = useRouteMatch();
    const flag = false;

    return (
        <Switch>
            <Route exact path={match.url} component={RepairersPage} />

            {/* Major route */}
            <Route exact path={`${match.url}/profile/:id`} component={() => RepairerProfilePage(flag)} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Major;