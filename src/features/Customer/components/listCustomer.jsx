import { Spinner } from "reactstrap";
import './listCustomer.scss';
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

    const token = localStorage.getItem('token');
    const { isLoading } = customer;
    const customersList = customer.list;

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

    const columns = [
        {
            header: 'Id',
            key: 'id',
            //   td: (data) => <div>the id is {data.id}</div>
        },
        {
            header: 'Full name',
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
                                pageSize={10}
                                pageSizeOptions={[10, 20]}
                                globalSearch
                            />
                        </div>
                    )
            }
        </div>
    )
}

export default ListCustomer;