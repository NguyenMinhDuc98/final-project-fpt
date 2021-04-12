import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import IssueForm from "../components/issueForm";
import { editIssue } from "../issueSlice";

function EditIssuePage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useParams();

    const token = localStorage.getItem('token');
    const major = majors.list[match.serviceId];
    const service = major.services[match.issueId];
    const issue = service.issues[match.id];

    const initialValues = {
        name: issue.name,
        estimate_fix_duration: issue.estimate_fix_duration,
        estimate_price: issue.estimate_price 
    }

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(editIssue({
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
        <div className='major-form-page'>
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
};

export default EditIssuePage;