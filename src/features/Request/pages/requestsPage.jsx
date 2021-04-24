import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListRequest from "../components/requestList";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import './requestPage.scss';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListRepairer } from "../requestSlice";

function RequestsPage() {
    return (
        <div className='request-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-request'>
                        <ListRequest
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RequestsPage;