import { Button, Col, Row } from "reactstrap";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ListIssue from "../components/listIssue";
import LeftNavbar from "../../../components/Home/components/left-navbar";
import '../../../assets/styles/style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './issuesPage.scss';
import { useHistory, useRouteMatch } from "react-router";
import { useSelector } from "react-redux";

function IssuesPage() {
    const majors = useSelector(state => state.major);
    const user = useSelector(state => state.login);
    const history = useHistory();

    const listMajor = majors.list;
    const match = useRouteMatch();

    // console.log('issues: ', issues);
    // console.log('match: ', match);

    const toAddIssue = () => {
        history.push(`${match.url}/add-issue`)
    }

    return (
        <div className='issue-page'>
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
                        <ListIssue
                            list={listMajor}
                            token={user.token}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default IssuesPage;