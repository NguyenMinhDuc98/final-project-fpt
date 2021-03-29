import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "reactstrap";
import { logout } from "../../../features/Login/loginSlice";

function HomePage() {
    const home = useSelector(state => state.login);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('home: ', home.token);

    const handleLogout = () =>{
        dispatch(logout());

        history.push('/login');
    }

    return (
        <div>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default HomePage;