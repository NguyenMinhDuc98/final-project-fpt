import { Table } from "reactstrap";
import './listCustomer.scss';
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCustomer, getListCustomer } from "../customerSlice";
import { useEffect } from "react";
import '../../../assets/styles/style.scss';
import Toggle from 'react-toggle';

function ListCustomer() {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const token = localStorage.getItem('token');

    const customersList = JSON.parse(localStorage.getItem('customer'));

    console.log({customersList})

    useEffect(() => {
        dispatch(getListCustomer(token));
        console.log('token: ', token);
    }, [token]);

    let checked = null;

    const handleActive = (id) => {
        dispatch(deleteCustomer({
            token: token,
            id: id
        }));
    };
    
    const handleInActive = (id) => {
        dispatch(deleteCustomer({
            token: token,
            id: id
        }));
    };

    const customers = customersList.map((customer, index) =>
        <tr key={customer.id}>
            <th>
                <NavLink to={`${match.url}/edit/${index}`}>
                    {customer.name}
                </NavLink>
            </th>
            <th>{customer.phone_number}</th>
            <th>{customer.email}</th>
            <th className="action-col">
            {
                    customer.is_active.data == 0 ? checked = false : checked = true
                }
                <Toggle
                    defaultChecked={checked}
                    onChange={() => {
                        checked ? handleInActive(customer.id, token) : handleActive(customer.id, token)
                    }}
                />
            </th>
        </tr>
    )

    return (
        <div className='customersList'>
            <h2>Customer list</h2>
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