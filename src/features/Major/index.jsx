import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MajorsPage from "./pages/majorsPage";

Major.propTypes = {};

 function Major(props) {
    const match = useRouteMatch();
    console.log('match: ', match);

    return (
        <Switch>
            <Route path={match.url} component={MajorsPage} />

            {/* <Route path={`${match.url}/majors`} component={ListMajorPage} /> */}

            <Route component={NotFound} />
        </Switch>
    )
}

export default Major;