import { Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './repairersPage.scss';
import RepairerProfile from "../components/repairerProfile";
import CoolTabs from 'react-cool-tabs';
import Wallet from "../components/wallet";
import { useRouteMatch } from "react-router";

function RepairerProfilePage() {
    const match = useRouteMatch();
    console.log({match})

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
                            style={{ width: 1040, height: 1000, background: 'white' }}
                            activeTabStyle={{ background: 'gray', color: 'white' }}
                            unActiveTabStyle={{ background: 'silver', color: 'black' }}
                            leftTabTitle={'Profile'}
                            rightTabTitle={'Wallet'}
                            leftContent={<RepairerProfile />}
                            rightContent={<Wallet />}
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