import { Button, Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListMajor from "../components/listMajor";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './majorsPage.scss';
import { useHistory } from "react-router";

function MajorsPage() {
    const history = useHistory();

    const handleRedirect = () => {
        history.push('/majors/addMajor')
    }

    return (
        <div className='major-page'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-major'>
                        <Button onClick={handleRedirect} className="add-major-button">
                            <FontAwesomeIcon icon="plus-circle" className="major-add" /> Add
                        </Button>
                        <ListMajor />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MajorsPage;