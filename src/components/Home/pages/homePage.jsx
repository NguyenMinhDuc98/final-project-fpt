import { Col, Row } from "reactstrap";
import Footer from "../../Footer";
import Header from "../../Header";
import LeftNavbar from "../components/left-navbar";
import Statistics from "../components/statistic";
import './homePage.scss';

function HomePage() {
    return (
        <div>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <Statistics />
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;