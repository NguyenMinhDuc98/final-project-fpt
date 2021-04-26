import { Spinner, Table } from "reactstrap";
import './listCustomer.scss';
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListCustomer } from "../customerSlice";
import { useEffect } from "react";
import '../../../assets/styles/style.scss';
import Toggle from 'react-toggle';
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"

function ListCustomer() {
    const customer = useSelector(state => state.customer);
    const dispatch = useDispatch();
    const match = useRouteMatch();

    const token = localStorage.getItem('token');
    const { isLoading } = customer;
    const customersList = customer.list;

    console.log({ customersList });

    useEffect(() => {
        dispatch(getListCustomer(token));
    }, []);

    // const handleActive = (id) => {
    //     dispatch(deleteCustomer({
    //         token: token,
    //         id: id
    //     }));
    // };

    // const handleInActive = (id) => {
    //     dispatch(deleteCustomer({
    //         token: token,
    //         id: id
    //     }));
    // };

    // const customers = customersList.map((customer, index) =>
    //     <tr key={customer.id}>
    //         <th>
    //             <NavLink to={`${match.url}/edit/${index}`}>
    //                 {customer.name}
    //             </NavLink>
    //         </th>
    //         <th>{customer.phone_number}</th>
    //         <th>{customer.email}</th>
    //         <th className="action-col">
    //             <Toggle
    //                 defaultChecked={customer.is_active.data == 0 ? false : true}
    //             // onChange={() => {
    //             //     customer.is_active.data == 0 ? handleInActive(customer.id, token) : handleActive(customer.id, token)
    //             // }}
    //             />
    //         </th>
    //     </tr>
    // )
    const columns = [
        {
            header: 'Id',
            key: 'id',
            //   td: (data) => <div>the id is {data.id}</div>
        },
        {
            header: 'Username',
            key: 'name',
            td: (data) =>
                <div>
                    {data.name}
                </div>
        },
        {
            header: 'Phone number',
            // can also use with nested objects
            key: 'phone_number'
        },
        {
            header: 'Email',
            key: 'email',
            td: (data) => <div>{data.email}</div>
        },
        {
            header: 'Active',
            key: 'active',
            td: (data) =>
                <div>
                    <Toggle
                        defaultChecked={data.is_active.data == 0 ? false : true}
                    />
                </div>
        }
    ]

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            <h3>Customer</h3>
                            <ReactFlexyTable
                                className="customer-table"
                                data={customersList}
                                columns={columns}
                                sortable
                                filterable
                                nonFilterCols={["active"]}
                                pageSize={10}
                                pageSizeOptions={[10, 20]}
                                globalSearch
                                caseSensitive
                            />
                        </div>
                    )
            }
        </div>
    )
}

export default ListCustomer;
                        // <div className='customersList'>
                        //     <h2>Customer list</h2>
                        //     <Table>
                        //         <thead>
                        //             <tr>
                        //                 <th>Name</th>
                        //                 <th>Phone number</th>
                        //                 <th>Email</th>
                        //                 <th>Action</th>
                        //             </tr>
                        //         </thead>
                        //         <tbody>
                        //             {customers}
                        //         </tbody>
                        //     </Table>
                        // </div>