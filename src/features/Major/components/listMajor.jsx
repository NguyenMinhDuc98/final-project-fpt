import { DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import './listMajor.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { Confirm } from 'react-st-modal';
import { useDispatch } from "react-redux";
import { deleteMajor } from "../majorSlice";

function ListMajor(props) {
    const majorList = props.list;
    const dispatch = useDispatch();
    const match = useRouteMatch();

    const onClick = async (id) => {
        const isConfirm = await Confirm(
            'You cannot undo this action',
            'Are you sure you want to delete the entry?'
        );

        if (isConfirm) {
            handleDelete(id);
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteMajor({
            token: props.token,
            id: id
        }));
    };

    const majors = majorList.map((major, index) =>
        <tr key={major.id}>
            <th>
                <NavLink to={`${match.url}/services/${index}`}>
                    {major.name}
                </NavLink>
            </th>
            <th><img src={major.image} alt="logo" /></th>
            <th className="action-col">
                <UncontrolledDropdown>
                    <DropdownToggle variant="secondary" size="sm" id="dropdown-custom-components">
                        <FontAwesomeIcon icon="ellipsis-h" />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <NavLink to={`${match.url}/edit/${index}`}>
                                Edit
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem onClick={() => onClick(major.id)}>
                            DELETE
                        </DropdownItem>
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