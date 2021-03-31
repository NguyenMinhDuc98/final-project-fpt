import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import './verifyPage.scss';
import ListVerifyRepairer from "../components/listVerifyRepairer";

function VerifyPage() {
    return (
        <div className='verify-page'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-verify'>
                        <ListVerifyRepairer />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default VerifyPage;