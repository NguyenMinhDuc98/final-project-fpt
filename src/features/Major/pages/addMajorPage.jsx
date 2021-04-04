import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import './addMajorPage.scss';
import { useHistory } from "react-router";
import AddMajorForm from "../components/addMajorForm";
import { useDispatch, useSelector } from "react-redux";
import { createMajor } from "../majorSlice";

function AddMajorPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.login);
    const token = user.token;

    const handleSubmit = (values) => {
        console.log('aaaaa');
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('values: ', values);
                console.log('token: ', token);

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
                        <AddMajorForm
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddMajorPage;