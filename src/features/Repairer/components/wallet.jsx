import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import card from '../../../assets/images/card.png';
import Toggle from 'react-toggle';
import '../../../assets/styles/style.scss';

function Wallet() {
    return (
        <div className='repairer-wallet'>
            <Row>
                <Col md={7}>
                    <Card>
                        <CardHeader>
                            Card
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md={8}>
                                    <img src={card} alt='Card' />
                                    <p>
                                        AAAAAAAAAAAAAAAAAAAAAA
                                    </p>
                                    <p>
                                        12/23
                                    </p>
                                </Col>
                                <Col md={4} className='right-wallet'>
                                    <p className='current-balance'>$ 2850</p>
                                    <p>Current balance</p>
                                    <p>1500$</p>
                                    <p><Button>+</Button></p>
                                    <p>350$</p>
                                    <p><Button>-</Button></p>
                                    <p>
                                        <Toggle
                                            defaultChecked={true}
                                        />
                                    </p>
                                    <p>Active Card</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={5}>
                    <CardHeader>Goals</CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <CardHeader>Revenue</CardHeader>
                                <CardBody>
                                    <p>$ 1000</p>
                                </CardBody>
                            </Col>
                            <Col md={6}>
                                <CardHeader>Revenue</CardHeader>
                                <CardBody>
                                    <p>$ 1000</p>
                                </CardBody>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row>
        </div>
    )
};

export default Wallet;