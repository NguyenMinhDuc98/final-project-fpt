import './requestList.scss';
import '../../../assets/styles/style.scss';
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getListRequest } from '../requestSlice';
import { Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

function ListMajor() {
    const request = useSelector(state => state.request);
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const { isLoading } = request;
    const requestList = request.list;

    console.log({requestList})

    useEffect(() => {
        dispatch(getListRequest(token));
    }, []);

    console.log({requestList})

    const columns = [
        {
            header: 'Id',
            key: 'id',
            td: (data) => 
                <Link to={`/requests/detail/${data.id}`}>
                    {data.id}
                </Link>
        },
        {
            header: 'Customer name',
            key: 'cusName',
            td: (data) => 
                {return data.Customer.name}
        },
        {
            header: 'Repairer name',
            key: 'repName',
            td: (data) => 
                {return data.Repairer.name}
        },
        {
            header: 'Address',
            key: 'address',
            td: (data) => 
                {return data.address}
        },
        {
            header: 'Schedule time',
            key: 'scheduletime',
            td: (data) => data.schedule_time ? data.schedule_time.replace("T"," ").slice(0, data.schedule_time.length - 5) : null
        },
        {
            header: 'Status',
            key: 'status',
            td: (data) => data.invoice ? data.invoice.status : null
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
                                pageSize={20}
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