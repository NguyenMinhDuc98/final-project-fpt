import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import './addMajorPage.scss';
import { useHistory } from "react-router";
import AddMajorForm from "../components/addMajorForm";

function AddMajorPage() {
    const history = useHistory();

    const handleSubmit = () => {

    }

    return (
        <div className='major-form-page'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='major-form'>
                        <AddMajorForm 
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddMajorPage;