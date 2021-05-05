import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Card, CardBody, CardHeader, Col, Row, Spinner } from "reactstrap";
import { getListRepairer } from "../repairerSlice";
import RepairerForm from "./repairerForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getListMajor } from '../../Major/majorSlice';
import cityOfVN from '../../../assets/cityOfVietNam';

function RepairerProfile() {
    const match = useParams();
    const repairers = useSelector(state => state.repairer);
    const major = useSelector(state => state.major);
    const dispatch = useDispatch();
    const [cityOfVn, setCityOfVn] = useState(cityOfVN);

    const user = repairers.list.find(({ id }) => id == match.id);
    const majors = major.list;
    const token = localStorage.getItem('token');
    const { isLoading } = repairers;

    console.log({user})

    useEffect(() => {
        dispatch(getListRepairer(token));
        dispatch(getListMajor(token))
    }, []);

    let repairerMajor = null;
    if (user && user.repairer) repairerMajor = majors.find(({ id }) => id == user.repairer.major_id);

    let initialValues = null;

    const verified = (repairer) => {
        return repairer.is_verify.data == 1 ? 'Repairer is verified' : 'Repairer is not verified'
    }

    let city;
    let district;

    if (cityOfVn && user && user.repairer) {
        city = cityOfVn.find((x) => x.Id == user.repairer.city);
        district = city.Districts.find((x) => x.Id == user.repairer.district);
    }

    if (user && majors) {
        initialValues = {
            name: user.name,
            phoneNumber: user.phone_number,
            email: user.email,
            city: city ? city.Name : null,
            district: district ? district.Name : null,
            address: user.repairer ? user.repairer.address : null,
            identity_card_number: user.repairer ? user.repairer.identity_card_number : null,
            major: repairerMajor ? repairerMajor.name : null,
            verify: user.repairer ? verified(user.repairer) : null
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
                                <Col md={8} style={{padding:'20px'}}>
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