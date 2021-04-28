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
import { getListMajor } from "../../Major/majorSlice";

function AddIssuePage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useParams();

    const token = localStorage.getItem('token');
    let service = null;

    useEffect(() => {
        dispatch(getListMajor(token));
    }, [])

    const issueNameArr = [];
    if (majors.list.length != 0) {
        const major = majors.list[match.majorIndex];

        service = major.services[match.serviceIndex];
        const issues = service.issues;

        let issueNameList = issues.map((issue) => {
            return (
                issueNameArr.push(issue.name.toLowerCase())
            )
        }
        )
    }


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