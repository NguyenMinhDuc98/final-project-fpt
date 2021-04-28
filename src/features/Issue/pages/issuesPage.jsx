import { Button, Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListIssue from "../components/listIssue";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import './issuesPage.scss';

function IssuesPage() {
    return (
        <div className='issue-page container-fluid'>
            <Header />

            <Row>
                <Col lg={3}>
                    <LeftNavbar />
                    <Footer />
                </Col>
                <Col lg={9}>
                    <div className='list-issue'>
                        <ListIssue />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default IssuesPage;