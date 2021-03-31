import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import './listMajor.scss';
import { getListMajor } from "../majorSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListMajor() {
    const major = useSelector(state => state.major);
    const user = useSelector(state => state.login);
    const dispatch = useDispatch();
    const mList = major.list;
    const token = user.token;

    useEffect(() => {
        dispatch(getListMajor(token))
    }, []);

    const majors = mList.map((major) =>
        <tr key={major.id}>
            <th>{major.name}</th>
            <th><img src={major.image} alt="logo" /></th>
            <th className="action-col">
                <UncontrolledDropdown>
                    <DropdownToggle variant="secondary" size="sm" id="dropdown-custom-components">
                        <FontAwesomeIcon icon="ellipsis-h" />
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem href="#/action-1">EDIT</DropdownItem>
                        <DropdownItem href="#/action-2">DELETE</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </th>
        </tr>
    )

    return (
        <div className='majorsList'>
            <Table>
                <thead>
                    <tr>
                        <th>Major</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {majors}
                </tbody>
            </Table>
        </div>
    )
}

export default ListMajor;