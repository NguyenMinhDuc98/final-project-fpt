import { Spinner } from "reactstrap";
import './listCustomer.scss';
import { useDispatch, useSelector } from "react-redux";
import { activeCustomer, deactivateCustomer, getListCustomer } from "../customerSlice";
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

    const handleActive = (id) => {
        dispatch(activeCustomer({
            token: token,
            user_id: id
        }));
    };

    const handleDeactivate = (id) => {
        dispatch(deactivateCustomer({
            token: token,
            user_id: id
        }));
    };

    const columns = [
        {
            header: 'Id',
            key: 'id',
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
                        defaultChecked={data.is_active}
                        onChange={() => {
                            !data.is_active ? handleActive(data.id, token) : handleDeactivate(data.id, token)
                        }}
                    />
                    {console.log(data.role_id)}
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