import { DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import './listService.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { Confirm } from 'react-st-modal';
import { useDispatch } from "react-redux";
import { deleteService } from "../serviceSlice";

function ListService(props) {

    const dispatch = useDispatch();
    const match = useRouteMatch();

    const index = match.params.id;
    const majorList = props.list;
    const serviceList = majorList[index].services;

    console.log('log: ', serviceList);

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
        dispatch(deleteService({
            token: props.token,
            id: id
        }));
    };

    const services = serviceList.map((service, index) =>
        <tr key={service.id}>
            <th>
                <NavLink to={`${match.url}/services/${index}`}>
                    {service.name}
                </NavLink>
            </th>
            {/* <th><img src={service.image} alt="logo" /></th> */}
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
                        <DropdownItem onClick={() => onClick(service.id)}>
                            DELETE
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </th>
        </tr>
    )

    return (
        <div className='servicesList'>
            <h3>{majorList[index].name}</h3>
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