import { Col, Row } from "reactstrap";
import Footer from "../../Footer";
import Header from "../../Header";
import LeftNavbar from "../components/left-navbar";
import Statistics from "../components/statistic";
import Chart from '../components/chart';
import '../../../assets/styles/style.scss';
import { useSelector } from "react-redux";

function HomePage() {
    const user = useSelector(state=>state.login);
    console.log('user: ', user);

    return (
        <div>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar 
                        token = {user.token}
                    />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <Statistics />
                    <Chart />
                    <Chart />
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;