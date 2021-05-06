import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './repairersPage.scss';
import RepairerProfile from "../components/repairerProfile";
import CoolTabs from 'react-cool-tabs';
import RepairerRequest from '../components/repairer-request';
import { useRouteMatch } from "react-router";

function RepairerProfilePage() {
    const match = useRouteMatch();

    const defaulStyle = {
        height: '1000px',
        width: '1019px',
        borderRadius: '10px',
        display: 'block',
        // overflow: 'auto',
    }

    return (
        <div className='repairer-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='repairer-info'>
                        {
                            match.url === `/verify/profile/${match.params.id}`
                                ? <RepairerProfile />
                                : <CoolTabs
                                    tabKey={'1'}
                                    style={defaulStyle}
                                    activeTabStyle={{ background: 'gray', color: 'white' }}
                                    unActiveTabStyle={{ background: 'silver', color: 'black' }}
                                    leftTabTitle={'Profile'}
                                    rightTabTitle={'Request'}
                                    leftContent={<RepairerProfile />}
                                    rightContent={<RepairerRequest />}
                                    contentTransitionStyle={'transform 0.6s ease-in'}
                                    borderTransitionStyle={'all 0.6s ease-in'}
                                />
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RepairerProfilePage;