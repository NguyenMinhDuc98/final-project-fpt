import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { logout } from '../../features/Login/loginSlice';

function Header() {
    const user = useSelector(state => state.login.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logout());

        history.push('/login');
    }

    return (
        <div className='header'>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {user.name}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        Profile
                    </DropdownItem>
                    <DropdownItem onClick={handleLogout}>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    )
}

export default Header;