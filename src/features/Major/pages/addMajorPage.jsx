import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import './addMajorPage.scss';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createMajor } from "../majorSlice";
import MajorForm from "../components/majorForm";

function AddMajorPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.login);
    const token = user.token;

    const initialValues = {
        name: '',
        image: ''
    }

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(createMajor({
                    token: token,
                    name: values.name,
                    image: values.image
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
                        <MajorForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddMajorPage;