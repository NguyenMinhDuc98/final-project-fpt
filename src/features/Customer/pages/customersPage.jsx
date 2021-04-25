import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListCustomer from "../components/listCustomer";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './customersPage.scss';

function CustomersPage() {

    return (
        <div className='customer-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-customer'>
                        <ListCustomer />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CustomersPage;