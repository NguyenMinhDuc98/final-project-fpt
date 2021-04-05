import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import './listMajor.scss';
import { getListMajor } from "../majorSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

function ListMajor(props) {
    const majorList = props.list;
    // const token = props.token;
    const match = useRouteMatch();
    console.log('match: ', match);

    

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