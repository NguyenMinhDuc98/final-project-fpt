import { useDispatch } from "react-redux";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import { editAdmin } from "../adminSlice";
import ProfileForm from "../components/profileForm";
import './adminProfile.scss';
import '../../../assets/styles/style.scss';

function AdminProfile() {
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token');

    console.log({user})

    const initialValues = {
        name: user.name,
        phoneNumber: user.phone,
        email: user.email,
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

    return (
        <div className='container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='admin-profile container'>
                        <ProfileForm
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default AdminProfile;