import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './addIssuePage.scss';
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createIssue } from "../issueSlice";
import IssueForm from "../components/issueForm";
import { useEffect } from "react";

function AddIssuePage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useParams();

    const major = majors.list[match.majorIndex];
    const service = major.services[match.serviceIndex];
    const token = localStorage.getItem('token');
    const issues = service.issues;

    const issueNameArr = [];

    let issueNameList = issues.map((issue) => {
        return (
            issueNameArr.push(issue.name)
        )
    }
    )

    const initialValues = {
        name: '',
        image: ''
    }

    const handleSubmit = (values) => {
        dispatch(createIssue({
            token: token,
            name: values.name,
            service_id: service.id,
            estimate_fix_duration: values.estimate_fix_duration,
            estimate_price: values.estimate_price
        }));

        return new Promise(resolve => {
            setTimeout(() => {
                history.push(`/majors/services/${match.majorIndex}/issues/${match.serviceIndex}`);
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
                            issueNameArr={issueNameArr}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddIssuePage;