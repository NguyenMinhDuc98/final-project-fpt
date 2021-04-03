import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import ServicesPage from "./pages/servicesPage";
import AddServicePage from './pages/addServicePage';

Service.propTypes = {};

function Service(props) {
    const match = useRouteMatch();
    console.log('match: ', match);

    return (
        <Switch>
            <Route exact path={match.url} component={ServicesPage} />

            <Route path={`${match.url}/addService`} component={AddServicePage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Service;