import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { logout } from '../../features/Login/loginSlice';

function Header() {
    const user = useSelector(state => state.login.user);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('userName: ', user);

    const handleLogout = () => {
        dispatch(logout());

        history.push('/login');
    }

    return (
        <div className='header'>
            <Nav className="flex-column" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        {user.name}
                    </DropdownToggle>
                    <DropdownMenu left>
                        <DropdownItem>
                            Profile
                </DropdownItem>
                        <DropdownItem onClick={handleLogout}>
                            Logout
                </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </div>
    )
}

export default Header;