import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import HomePage from "./pages/homePage";

Home.propTypes = {};

 function Home(props) {
    const match = useRouteMatch();
    console.log('match: ', match);

    return (
        <Switch>
            <Route path={match.url} component={HomePage} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default Home;