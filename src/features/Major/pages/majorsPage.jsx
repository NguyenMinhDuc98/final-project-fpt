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
import { useState } from "react";

function MajorsPage() {
    var data = null;
    const major = useSelector(state => state.major);
    data = major.list;
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.login);

    const [majorList, setMajorList] = useState([]);
    useEffect(() => {
        dispatch(getListMajor(user.token));
    }, [data]);

    useEffect(() => {
        async function fetchMajorList() {
            try {
                console.log('data: ', data);
                setMajorList(data);
            } catch (error) {
                console.log('error: ', error.message)
            }
        }

        fetchMajorList();
    }, [data]);



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
                            list={majorList}
                            token={user.token}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MajorsPage;