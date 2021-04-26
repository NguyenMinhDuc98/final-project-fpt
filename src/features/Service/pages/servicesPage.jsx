import { Button, Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListService from "../components/listService";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './servicesPage.scss';
import { useHistory, useRouteMatch } from "react-router";

function ServicesPage() {
    const history = useHistory();
    const match = useRouteMatch();

    const toAddService = () => {
        history.push(`${match.url}/add-service`)
    }

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
                        <Button onClick={toAddService} className="add-service-button">
                            <FontAwesomeIcon icon="plus-circle" className="service-add" /> Add
                                </Button>
                        <ListService />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ServicesPage;