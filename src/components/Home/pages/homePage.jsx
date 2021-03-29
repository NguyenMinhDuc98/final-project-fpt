import { useSelector } from "react-redux";

function HomePage(){
    const home = useSelector(state => state.login);
    console.log('home: ', home);

    return(
        <p>This is homepage</p>
    )
}

export default HomePage;