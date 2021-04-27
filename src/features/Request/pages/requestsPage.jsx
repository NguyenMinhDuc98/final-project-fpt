import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListRequest from "../components/requestList";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './requestPage.scss';

function RequestsPage() {
    return (
        <div className='request-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-request'>
                        <ListRequest />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RequestsPage;