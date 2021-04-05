import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import HomePage from "./pages/homePage";

function Home(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={match.url} component={HomePage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Home;