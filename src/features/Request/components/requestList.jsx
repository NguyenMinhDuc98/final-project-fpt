import './requestList.scss';
import '../../../assets/styles/style.scss';
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getListRequest } from '../requestSlice';
import { Spinner } from 'reactstrap';

function ListMajor() {
    const request = useSelector(state => state.request);
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const { isLoading } = request;
    const requestList = request.list;

    useEffect(() => {
        dispatch(getListRequest(token));
    }, []);

    console.log({requestList})

    const columns = [
        {
            header: 'Id',
            key: 'id',
        },
        {
            header: 'Customer name',
            key: 'Customer.name',
        },
        {
            header: 'Customer phone number',
            key: 'Customer.phone_number',
        },
        {
            header: 'Repairer name',
            key: 'Repairer.name',
        },
        {
            header: 'Repairer phone number',
            key: 'Repairer.phone_number',
        },
        {
            header: 'Address',
            key: 'address',
        },
    ]

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            <h3>Request</h3>
                            <ReactFlexyTable
                                className="request-table"
                                data={requestList}
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
};

export default ListMajor;