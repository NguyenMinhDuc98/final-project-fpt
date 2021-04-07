import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MajorsPage from "./pages/majorsPage";
import AddMajorPage from './pages/addMajorPage';
import ServicesPage from "../Service/pages/servicesPage";
import EditMajorPage from "./pages/editMajorPage";
import EditServicePage from '../Service/pages/editServicePage';
import AddServicePage from "../Service/pages/addServicePage";
import IssuesPage from "../Issue/pages/issuesPage";
import AddIssuePage from "../Issue/pages/addIssuePage";
import EditIssuePage from "../Issue/pages/editIssuePage";

Major.propTypes = {};

function Major(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={MajorsPage} />

            {/* Major route */}
            <Route path={`${match.url}/add-major`} component={AddMajorPage} />
            <Route exact path={`${match.url}/edit/:id`} component={EditMajorPage} />

            {/* Service route */}
            <Route exact path={`${match.url}/services/:id`} component={ServicesPage} />
            <Route exact path={`${match.url}/services/:id/add-service`} component={AddServicePage} />
            <Route exact path={`${match.url}/services/:majorId/edit/:serviceId`} component={EditServicePage} />

            {/* Issue route */}
            <Route exact path={`${match.url}/services/:serviceId/issues/:issueId`} component={IssuesPage} />
            <Route exact path={`${match.url}/services/:serviceId/issues/:issueId/add-issue`} component={AddIssuePage} />
            <Route exact path={`${match.url}/services/:serviceId/issues/:issueId/edit/:id`} component={EditIssuePage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Major;