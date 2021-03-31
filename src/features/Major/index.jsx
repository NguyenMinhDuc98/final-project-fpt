import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MajorsPage from "./pages/majorsPage";
import AddMajorPage from './pages/addMajorPage';

Major.propTypes = {};

function Major(props) {
    const match = useRouteMatch();
    console.log('match: ', match);

    return (
        <Switch>
            <Route exact path={match.url} component={MajorsPage} />

            <Route path={`${match.url}/addMajor`} component={AddMajorPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Major;