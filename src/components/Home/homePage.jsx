import { Col, Row } from "reactstrap";
import Footer from "../Footer";
import Header from "../Header";
import LeftNavbar from "../Sidebar/left-navbar";
import Statistics from "../Statistic/statistic";
import Chart from '../Chart/chart';
import '../../assets/styles/style.scss';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getListRepairer } from "../../features/Request/requestSlice";
import { getNotVerifiedList } from "../../features/VerifyRepairer/verifySlice";

function HomePage() {
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');

    useEffect(() => {
        dispatch(getListRepairer(token))
    }, [token])

    useEffect(() => {
        dispatch(getNotVerifiedList(token))
    }, [token])

    console.log('token: ', localStorage.getItem('token'));
    console.log('user: ', JSON.parse(localStorage.getItem('user')));

    return (
        <div className='container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <Statistics />
                    <Chart />
                    <Chart />
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;