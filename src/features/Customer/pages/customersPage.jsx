import { Button, Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListCustomer from "../components/listCustomer";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './customersPage.scss';
import { useHistory } from "react-router";

function CustomersPage() {
    const history = useHistory();

    const toAddCustomer = () => {
        history.push('/customers/add-customer')
    }

    return (
        <div className='customer-page'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-customer'>
                        <Button onClick={toAddCustomer} className="add-customer-button">
                            <FontAwesomeIcon icon="plus-circle" className="customer-add" /> Add
                        </Button>
                        <ListCustomer />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CustomersPage;