import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './left-navbar.scss';

function LeftNavbar() {
    const history = useHistory();

    const handle = () => {
        history.push('/majors');
    }

    return (
        <div className='left-navbar'>
            <Navbar color="light" light expand="md">
                <Nav className="flex-column" navbar tabs pills>
                    <NavItem>
                        <NavLink href="#">
                            <FontAwesomeIcon icon='chart-line'/> Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <FontAwesomeIcon icon="users" /> Customers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <FontAwesomeIcon icon="tools" /> Repairers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClickCapture={handle}>
                            <FontAwesomeIcon icon="clipboard-list" /> Majors
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <FontAwesomeIcon icon="tasks" /> Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <FontAwesomeIcon icon="pen" /> Issues
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <FontAwesomeIcon icon="check" /> Request
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <FontAwesomeIcon icon="ban" /> List users banned
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default LeftNavbar;