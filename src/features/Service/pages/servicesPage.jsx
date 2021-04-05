import { Button, Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListService from "../components/listService";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './servicesPage.scss';
import { useHistory, useRouteMatch } from "react-router";
import { useSelector } from "react-redux";

function ServicesPage() {
    const majors = useSelector(state => state.major);
    const user = useSelector(state => state.login);
    const history = useHistory();

    const services = majors.list;
    const match = useRouteMatch();

    // console.log('services: ', services);
    // console.log('match: ', match);

    const toAddService = () => {
        history.push(`${match.url}/add-service`)
    }

    return (
        <div className='service-page'>
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
                        <ListService
                            list={services}
                            token={user.token}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ServicesPage;