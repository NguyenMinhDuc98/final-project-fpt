import { Button, Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListIssue from "../components/listIssue";
import LeftNavbar from "../../../components/Sidebar/left-navbar";
import '../../../assets/styles/style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './issuesPage.scss';
import { useHistory, useRouteMatch } from "react-router";

function IssuesPage() {
    const history = useHistory();
    const match = useRouteMatch();

    const toAddIssue = () => {
        history.push(`${match.url}/add-issue`)
    }

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
                        <Button onClick={toAddIssue} className="add-issue-button">
                            <FontAwesomeIcon icon="plus-circle" className="issue-add" /> Add
                        </Button>
                        <ListIssue />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default IssuesPage;