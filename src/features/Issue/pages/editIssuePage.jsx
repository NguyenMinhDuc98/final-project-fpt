import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import IssueForm from "../components/issueForm";
import { editIssue } from "../issueSlice";

function EditIssuePage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useParams();

    const token = localStorage.getItem('token');
    const major = majors.list[match.majorIndex];
    const service = major.services[match.serviceIndex];
    const issues = service.issues;
    const issue = issues[match.issueId];

    console.log({ major, service, issues });

    const issueNameArr = [];

    let issueNameList = issues.map((issue) => {
        return (
            issueNameArr.push(issue.name)
        )
    }
    )

    const initialValues = {
        name: issue.name,
        estimate_fix_duration: issue.estimate_fix_duration,
        estimate_price: issue.estimate_price
    }

    const handleSubmit = (values) => {
        dispatch(editIssue({
            token: token,
            name: values.name,
            id: issue.id,
            service_id: service.id,
            estimate_fix_duration: values.estimate_fix_duration,
            estimate_price: values.estimate_price
        }));

        return new Promise(resolve => {
            setTimeout(() => {
                history.push(`/majors/services/11/issues/${match.serviceIndex}`);
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
};

export default EditIssuePage;