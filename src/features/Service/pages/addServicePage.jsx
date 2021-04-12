import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import './addServicePage.scss';
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createService } from "../serviceSlice";
import ServiceForm from "../components/serviceForm";

function AddServicePage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useParams();

    const major = majors.list[match.id];
    const token = localStorage.getItem('token');

    const initialValues = {
        name: '',
        image: ''
    }

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(createService({
                    token: token,
                    name: values.name,
                    id: major.id
                }));
                history.push('/majors');
                resolve(true);
            }, 3000);
        });
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
                        <ServiceForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddServicePage;