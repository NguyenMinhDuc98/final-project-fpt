import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import './repairersPage.scss';
import RepairerForm from "../components/repairerForm";
import RepairerProfile from "../components/repairerProfile";

function RepairerProfilePage() {
    return (
        <div className='repairer-page'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-repairer'>
                        <RepairerProfile

                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RepairerProfilePage;