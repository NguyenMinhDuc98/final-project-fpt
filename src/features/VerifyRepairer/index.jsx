import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import VerifyPage from "./pages/verifyPage";
import RepairerProfilePage from '../Repairer/pages/repairerProfilePage';

Approve.propTypes = {};

function Approve(props) {
    const match = useRouteMatch();
    const flag = true;

    return (
        <Switch>
            <Route exact path={match.url} component={VerifyPage} />
            <Route exact path={`${match.url}/profile/:id`} component={() => RepairerProfilePage(flag)} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Approve;