import { Col, Row } from "reactstrap";
import Footer from "../Footer";
import Header from "../Header";
import LeftNavbar from "../Sidebar/left-navbar";
import Statistics from "../Statistic/statistic";
import Chart from '../Chart/chart';
import '../../assets/styles/style.scss';
import ListRequest from '../../features/Request/components/requestList';
import "./homePage.scss";

function HomePage() {
    console.log(localStorage.getItem('token'));
    
    return (
        <div className='container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    {/* <Statistics />
                    <Chart />
                    <Chart /> */}
                    <div className='list-request'>
                        <ListRequest />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;