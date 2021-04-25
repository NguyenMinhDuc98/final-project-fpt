import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { getListRepairer } from "../repairerSlice";
import RepairerForm from "./repairerForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RepairerProfile() {
    const match = useParams();
    const repairers = useSelector(state => state.repairer);
    const dispatch = useDispatch();

    const repairer = repairers.list[match.id];
    const token = localStorage.getItem('token');

    console.log(repairers);

    useEffect(() => {
        dispatch(getListRepairer(token));
    }, [token]);

    const initialValues = {
        name: repairer.name,
        phoneNumber: repairer.phone_number,
        email: repairer.email
    }

    return (
        <div className='repairer-profile'>
            <Row>
                <Col md={8}>
                    <Card>
                        <CardHeader>
                            Repairer Profile
                    </CardHeader>
                        <CardBody>
                            <RepairerForm
                                initialValues={initialValues}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon icon='user'  className='repairer-image'/>
                </Col>
            </Row>
        </div>
    )
}

export default RepairerProfile;