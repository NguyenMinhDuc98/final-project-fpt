import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListService from "../components/listService";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './servicesPage.scss';

function ServicesPage() {

    return (
        <div className='service-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-service'>
                        <ListService />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ServicesPage;