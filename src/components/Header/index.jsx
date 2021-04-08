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

    const toChangePassword = () => {
        history.push('/login/changePassword');
    }

    const toProfile = () => {
        history.push('/admin');
    }

    return (
        <div className='header'>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {user.name}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={toProfile}>
                        Profile
                    </DropdownItem>
                    <DropdownItem onClick={toChangePassword}>
                        Change password
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