import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListRepairer from "../components/listRepairer";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './repairersPage.scss';

function RepairersPage() {
    return (
        <div className='repairer-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-repairer'>
                        <ListRepairer />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RepairersPage;