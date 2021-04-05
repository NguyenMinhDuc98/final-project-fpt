import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MajorsPage from "./pages/majorsPage";
import AddMajorPage from './pages/addMajorPage';
// import ListService from "../Service/components/listService";
import ServicesPage from "../Service/pages/servicesPage";
import EditMajorPage from "./pages/editMajorPage";

Major.propTypes = {};

function Major(props) {
    const match = useRouteMatch();
    console.log('match: ', match);

    return (
        <Switch>
            <Route exact path={match.url} component={MajorsPage} />

            <Route path={`${match.url}/addMajor`} component={AddMajorPage} />
            <Route exact path={`${match.url}/services/:id`} component={ServicesPage} />
            <Route exact path={`${match.url}/edit/:id`} component={EditMajorPage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Major;