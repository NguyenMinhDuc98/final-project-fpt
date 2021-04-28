import { useDispatch } from "react-redux";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import { editAdmin } from "../adminSlice";
import ProfileForm from "../components/profileForm";
import './adminProfile.scss';
import '../../../assets/styles/style.scss';
import { useHistory } from "react-router";

function AdminProfile() {
    const dispatch = useDispatch();
    const history = useHistory()

    const user = JSON.parse(localStorage.getItem('user'));
    const username= localStorage.getItem("username");
    const token = localStorage.getItem('token');

    const initialValues = {
        name: username ? username : user.name,
        phone_number: user.phone,
        email: user.email,
    }
    const handleSubmit = (values) => {
        const propsUpdate = {
            token: token,
            name: values.name,
            email: values.email,
            id: user.id,
            phone_number: values.phone_number
        };
        dispatch(editAdmin(propsUpdate));

        return new Promise(resolve => {
            setTimeout(() => {
                history.push('/');
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