import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './left-navbar.scss';

function LeftNavbar(props) {
    const history = useHistory();

    const toMajors = () => {
        history.push('/majors');
    }

    const toVerify = () => {
        history.push('/verify');
    }

    const toHome = () => {
        history.push('/');
    }
    
    const toCus = () => {
        history.push('/customers');
    }
    const toRep = () => {
        history.push('/repairers');
    }
    // const toReq = () => {
    //     history.push('/requests');
    // }

    return (
        <div className='left-navbar'>
            <Navbar color="light" light expand="md">
                <Nav className="flex-column nav-pills" navbar tabs>
                    <NavItem>
                        <NavLink onClick={toHome}>
                            <FontAwesomeIcon icon='check' /> Requests
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={toCus}>
                            <FontAwesomeIcon icon="users" /> Customers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={toRep}>
                            <FontAwesomeIcon icon="tools" /> Repairers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={toVerify}>
                            <FontAwesomeIcon icon="bell" /> Verify Repairers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={toMajors}>
                            <FontAwesomeIcon icon="clipboard-list" /> Majors
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink onClick={toReq}>
                            <FontAwesomeIcon icon="check" /> Request
                        </NavLink>
                    </NavItem> */}
                </Nav>
            </Navbar>
        </div>
    );
}

export default LeftNavbar;