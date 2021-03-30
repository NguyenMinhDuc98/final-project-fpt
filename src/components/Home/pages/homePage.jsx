import { Col, Row } from "reactstrap";
import Footer from "../../Footer";
import Header from "../../Header";
import LeftNavbar from "../components/left-navbar";
import './homePage.scss';

function HomePage() {
    return (
        <div>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                </Col>
                <Col lg={9}>
                </Col>
            </Row>

            {/* <Footer /> */}
        </div>
    )
}

export default HomePage;