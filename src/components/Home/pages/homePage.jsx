import { Col, Row } from "reactstrap";
import Footer from "../../Footer";
import Header from "../../Header";
import LeftNavbar from "../components/left-navbar";
import Statistics from "../components/statistic";
import Chart from '../components/chart';
import '../../../assets/styles/style.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListRepairer } from "../../../features/Request/requestSlice";

function HomePage() {
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    
    useEffect(()=>{
        dispatch(getListRepairer(token))
    },[token])

    console.log('token: ', localStorage.getItem('token'));
    console.log('user: ', JSON.parse(localStorage.getItem('user')));

    return (
        <div>
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