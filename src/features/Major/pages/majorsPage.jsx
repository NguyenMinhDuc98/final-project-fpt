import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListMajor from "../components/listMajor";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';

function MajorsPage() {
    return (
        <div>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <ListMajor />
                </Col>
            </Row>
        </div>
    )
}

export default MajorsPage;