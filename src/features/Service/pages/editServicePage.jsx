import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import MajorForm from "../components/serviceForm";
import { editService } from "../serviceSlice";

function EditServicePage() {
    const majors = useSelector(state => state.major);
    const history = useHistory();
    const dispatch = useDispatch();

    const listMajor = majors.list;
    const match = useParams();
    const major = listMajor[match.majorId];
    const token = localStorage.getItem('token');
    const service = major.services[match.serviceId];

    const initialValues = {
        name: service.name,
    }
    console.log('log: ', match);

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(editService({
                    token: token,
                    name: values.name,
                    id: service.id,
                    major_id: major.id
                }));
                history.push(`/majors/services/${match.majorId}`);
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
                        <MajorForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default EditServicePage;