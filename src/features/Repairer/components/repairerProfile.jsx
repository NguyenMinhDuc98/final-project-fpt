import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Card, CardBody, CardHeader, Col, Row, Spinner } from "reactstrap";
import { getListRepairer } from "../repairerSlice";
import RepairerForm from "./repairerForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getListMajor } from '../../Major/majorSlice'

function RepairerProfile() {
    const match = useParams();
    const repairers = useSelector(state => state.repairer);
    const major = useSelector(state => state.major);
    const dispatch = useDispatch();

    const user = repairers.list[match.id];
    const majors = major.list;
    const token = localStorage.getItem('token');
    const { isLoading } = repairers;

    console.log('user:', user);
    console.log('majors:', majors);

    useEffect(() => {
        dispatch(getListRepairer(token));
        dispatch(getListMajor(token))
    }, []);

    const repairerMajor = majors.find(({ id }) => id == user.repairer.major_id);

    let initialValues = null;

    if (user && majors) {
        initialValues = {
            name: user.name,
            phoneNumber: user.phone_number,
            email: user.email,
            address: user.repairer.address,
            identity_card_number: user.repairer.identity_card_number,
            major: repairerMajor.name
        }
    }

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
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
                                    <FontAwesomeIcon icon='user' className='repairer-image' />
                                </Col>
                            </Row>
                        </div>
                    )
            }
        </div>
    )
}

export default RepairerProfile;