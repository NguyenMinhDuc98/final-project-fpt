import { DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import './listCustomer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { Confirm } from 'react-st-modal';
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getListCustomer } from "../customerSlice";
import { useEffect } from "react";

function ListCustomer() {
    const customer = useSelector(state => state.customer);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const token = localStorage.getItem('token');

    console.log('customer: ', customer);

    useEffect(() => {
        dispatch(getListCustomer(token));
        console.log('token: ', token);
    }, []);

    const customerList = customer.list;

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
        dispatch(deleteCustomer({
            token: token,
            id: id
        }));
    };

    const customers = customerList.map((customer, index) =>
        <tr key={customer.id}>
            <th>
                <NavLink to={`${match.url}/edit/${index}`}>
                    {customer.name}
                </NavLink>
            </th>
            <th>{customer.phone_number}</th>
            <th>{customer.email}</th>
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
                        <DropdownItem type='button' onClick={() => onClick(customer.id)}>
                            DELETE
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </th>
        </tr>
    )

    return (
        <div className='customersList'>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers}
                </tbody>
            </Table>
        </div>
    )
}

export default ListCustomer;