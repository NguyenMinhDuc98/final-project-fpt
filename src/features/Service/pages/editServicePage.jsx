import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { Col, Row, Spinner } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import { getListMajor } from "../../Major/majorSlice";
import ServiceForm from "../components/serviceForm";
import { editService } from "../serviceSlice";
import './addServicePage.scss';

function EditServicePage() {
    const majors = useSelector(state => state.major);
    const services = useSelector(state => state.service);
    const dispatch = useDispatch();
    const param = useParams();

    const token = localStorage.getItem("token");
    const { isLoading } = majors;
    const { editMessage } = services;

    let major = null;
    let service = null;
    let initialValues = null;
    let serviceNameArr = [];

    if (majors && majors.list.length > 0) {
        major = majors.list.find(({ id }) => id == param.majorId);
        service = major.services.find(({ id }) => id == param.serviceId);
        const services = majors.list

        let serviceNameList = services.map((service) => {
            return (
                serviceNameArr.push(service.name.toLowerCase())
            )
        }
        )

        initialValues = {
            name: service.name,
        }
    }

    useEffect(() => {
        dispatch(getListMajor(token))
    }, [])


    const handleSubmit = (values) => {
        dispatch(editService({
            token: token,
            name: values.name,
            id: service.id,
            major_id: major.id
        }));
    }

    useEffect(() => {
        if (editMessage == 'success') window.location.replace(`/majors/services/${param.majorId}`)
    }, [editMessage]);

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
                        {
                            isLoading
                                ? <div className='spinner'><Spinner size='xxl' /></div>
                                : (
                                    <ServiceForm
                                        initialValues={initialValues}
                                        onSubmit={handleSubmit}
                                        serviceNameArr={serviceNameArr}
                                    />
                                )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default EditServicePage;