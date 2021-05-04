import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './addMajorPage.scss';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createMajor, getListMajor } from "../majorSlice";
import MajorForm from "../components/majorForm";
import { useEffect } from "react";

function AddMajorPage() {
    const major = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const { addMessage } = major;

    const initialValues = {
        name: '',
        image: ''
    }

    useEffect(() => {
        dispatch(getListMajor(token));
    }, [])

    const majorNameArr = [];

    if (major) {
        const majors = major.list;

        let majorNameList = majors.map((major) => {
            return (
                majorNameArr.push(major.name.toLowerCase())
            )
        }
        )
    }

    const handleSubmit = (values) => {
        dispatch(createMajor({
            token: token,
            name: values.name,
            image: values.image
        }));
    };

    useEffect(() => {
        if (addMessage == 'success') history.push('/majors')
    }, [addMessage]);

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
                        <MajorForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            majorNameArr={majorNameArr}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddMajorPage;