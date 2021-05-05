import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import { editAdmin } from "../adminSlice";
import ProfileForm from "../components/profileForm";
import './adminProfile.scss';
import '../../../assets/styles/style.scss';
import { useHistory } from "react-router";
import { useEffect } from "react";

function AdminProfile() {
    const admin = useSelector(state => state.admin);
    const dispatch = useDispatch();
    const history = useHistory()

    const user = JSON.parse(localStorage.getItem('user'));
    const username = localStorage.getItem("username");
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const { isLoading, message } = admin;

    const initialValues = {
        name: username ? username : user.name,
        phone_number: user.phone,
        email: email ? email : user.email,
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
    };

    useEffect(() => {
        if (message == 'success') window.location.replace('/');
    }, [message])

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
                            isLoading={isLoading}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default AdminProfile;