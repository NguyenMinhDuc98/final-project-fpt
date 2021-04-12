import { Button, Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListMajor from "../components/listMajor";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './majorsPage.scss';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListMajor } from "../majorSlice";

function MajorsPage() {
    const major = useSelector(state => state.major);
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem('token');

    useEffect(() => {
        dispatch(getListMajor(token));
    }, []);

    const toAddMajor = () => {
        history.push('/majors/add-major')
    }

    return (
        <div className='major-page'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-major'>
                        <Button onClick={toAddMajor} className="add-major-button">
                            <FontAwesomeIcon icon="plus-circle" className="major-add" /> Add
                        </Button>
                        <ListMajor
                            list={major.list}
                            token={token}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MajorsPage;