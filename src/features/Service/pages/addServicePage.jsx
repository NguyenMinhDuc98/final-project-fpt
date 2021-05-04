import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './addServicePage.scss';
import { useHistory, useParams, useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createService } from "../serviceSlice";
import ServiceForm from "../components/serviceForm";
import { useEffect } from "react";
import { getListMajor } from "../../Major/majorSlice";

function AddServicePage() {
    const majors = useSelector(state => state.major);
    const services = useSelector(state => state.service);
    const history = useHistory();
    const dispatch = useDispatch();
    const match = useParams();

    const token = localStorage.getItem('token');
    const { addMessage } = services;
    let major = null;
    let Service = null

    useEffect(() => {
        dispatch(getListMajor(token));
    }, [])

    const serviceNameArr = [];
    if (majors.list.length > 0) {
        major = majors.list.find(({ id }) => id == match.majorId);

        Service = major.services;

        let serviceNameList = Service.map((service) => {
            return (
                serviceNameArr.push(service.name.toLowerCase())
            )
        }
        )
    }

    const initialValues = {
        name: '',
        image: ''
    }

    const handleSubmit = (values) => {
        dispatch(createService({
            token: token,
            name: values.name,
            major_id: major.id
        }));
    };

    useEffect(() => {
        if (addMessage == 'success') window.location.replace(`/majors/services/${match.majorId}`)
    }, [addMessage]);

    return (
        <div className='service-form-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='service-form'>
                        <ServiceForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            serviceNameArr={serviceNameArr}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddServicePage;