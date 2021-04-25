import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'reactstrap';
import './statistic.scss';

function Statistic() {
    return (
        <div className="statistic">
            <h3>Statistic</h3>
            <Row>
                <Col>
                    <FontAwesomeIcon icon='wrench' className='services ' />
                    <div> 1000 Services </div>
                </Col>
                <Col>
                    <FontAwesomeIcon icon='users' className='users ' />
                    <div> 1000 Users </div>
                </Col>
                <Col>
                    <FontAwesomeIcon icon='tools' className='repairers ' />
                    <div> 1000 Repairers </div>
                </Col>
                <Col>
                    <FontAwesomeIcon icon='dollar-sign' className='revenue ' />
                    <div> 1000 Revenue </div>
                </Col>
            </Row>
        </div>
    )
}

export default Statistic;