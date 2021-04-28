import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { Col, Row, Spinner } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import { getListMajor } from "../../Major/majorSlice";
import IssueForm from "../components/issueForm";
import { createIssue, editIssue } from "../issueSlice";
import './addIssuePage.scss';

function EditIssuePage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const param = useParams();

    const token = localStorage.getItem('token');
    const { isLoading } = majors;

    let major = null;
    let service = null;
    let issues = null;

    useEffect(() => {
        dispatch(getListMajor(token))
    }, [])

    const issueNameArr = [];
    const initialValues = {
        name: '',
        estimate_fix_duration: '',
        estimate_price: ''
    };

    if (majors.list.length > 0) {
        major = majors.list.find(({ id }) => id == param.majorId);
        service = major.services.find(({ id }) => id == param.serviceId);
        issues = service.issues;

        let issueNameList = issues.map((issue) => {
            return (
                issueNameArr.push(issue.name.toLowerCase())
            )
        }
        )
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
                history.push(`/majors/services/${param.majorId}/issues/${param.serviceId}`);
                resolve(true);
            }, 3000);
        });
    }

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