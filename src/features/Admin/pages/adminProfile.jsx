import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import { editAdmin } from "../adminSlice";
import ProfileForm from "../components/profileForm";

function AdminProfile() {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.login);

    const token = user.token;

    const initialValues = {
        name: 'service.name',
    }
    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(editAdmin({
                    token: token,
                    name: values.name,
                }));
                // history.push('/majors');
                resolve(true);
            }, 3000);
        });
    }

    return(
        <div>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <ProfileForm 
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    />
                </Col>
            </Row>
        </div>
    )
};

export default AdminProfile;