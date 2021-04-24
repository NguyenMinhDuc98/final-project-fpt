import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import './addIssuePage.scss';
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createIssue } from "../issueSlice";
import IssueForm from "../components/issueForm";

function AddIssuePage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useParams();


    const major = majors.list[match.serviceId];
    const service = major.services[match.issueId];
    const token = localStorage.getItem('token');

    const initialValues = {
        name: '',
        image: ''
    }

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(createIssue({
                    token: token,
                    name: values.name,
                    id: service.id,
                    estimate_fix_duration: values.estimate_fix_duration,
                    estimate_price: values.estimate_price
                }));
                history.push('/majors');
                resolve(true);
            }, 3000);
        });
    }

    return (
        <div className='major-form-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='major-form'>
                        <IssueForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddIssuePage;