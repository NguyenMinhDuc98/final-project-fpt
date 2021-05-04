import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { Col, Row, Spinner } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import { getListMajor } from "../../Major/majorSlice";
import IssueForm from "../components/issueForm";
import { editIssue } from "../issueSlice";

function EditIssuePage() {
    const majors = useSelector(state => state.major);
    const iss = useSelector(state => state.issue);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const param = useParams();

    const token = localStorage.getItem('token');
    const { isLoading } = majors;
    const { editMessage } = iss;

    let major = null;
    let service = null;
    let issues = null;
    let issue = null;

    useEffect(() => {
        dispatch(getListMajor(token))
    }, [])

    const issueNameArr = [];
    let initialValues = '';

    if (majors.list.length > 0) {
        major = majors.list.find(({ id }) => id == param.majorId);
        service = major.services.find(({ id }) => id == param.serviceId);
        issue = service.issues.find(({ id }) => id == param.issueId);
        issues = service.issues;

        let issueNameList = issues.map((issue) => {
            return (
                issueNameArr.push(issue.name.toLowerCase())
            )
        }
        )

        initialValues = {
            name: issue.name,
            estimate_fix_duration: issue.estimate_fix_duration,
            estimate_price: issue.estimate_price.slice(0, issue.estimate_price.length - 3)
        }
    };

    const handleSubmit = (values) => {
        dispatch(editIssue({
            token: token,
            name: values.name,
            id: issue.id,
            service_id: service.id,
            estimate_fix_duration: values.estimate_fix_duration,
            estimate_price: values.estimate_price
        }));
    };

    useEffect(() => {
        if (editMessage == 'success') window.location.replace(`/majors/services/${param.majorId}/issues/${param.serviceId}`)
    }, [editMessage]);

    return (
        <div className='issue-form-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='issue-form'>
                        {
                            isLoading
                                ? <div className='spinner'><Spinner size='xxl' /></div>
                                : (
                                    <IssueForm
                                        initialValues={initialValues}
                                        onSubmit={handleSubmit}
                                        issueNameArr={issueNameArr}
                                    />
                                )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default EditIssuePage;