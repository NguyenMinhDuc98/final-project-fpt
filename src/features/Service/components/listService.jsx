import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import './listService.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getListService } from "../serviceSlice";
import { useRouteMatch } from "react-router";

function ListService(props) {
    const major = useSelector(state => state.major);
    const user = useSelector(state => state.login);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const sList = major.list;
    const token = user.token;
    const sIndex = parseInt(match.params.id);

    useEffect(() => {
        dispatch(getListService(token));
    },[]);

    console.log('match: ', match.id);
    console.log('index: ', sIndex);
    console.log('List service: ', major);

    const services = sList[sIndex].services.map((service) =>
        <tr key={service.id}>
            <th>{service.name}</th>
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
    );

    return (
        <div className='servicesList'>
            <h3>{sList[sIndex].name}</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Service</th>
                        {/* <th>Image</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services}
                </tbody>
            </Table>
        </div>
    )
}

export default ListService;