import '../../Request/components/requestList.scss';
import '../../../assets/styles/style.scss';
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getListRequest } from '../../Request/requestSlice';
import { Spinner } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import cityOfVN from '../../../assets/cityOfVietNam';

function RepairerRequest() {
    const request = useSelector(state => state.request);
    const dispatch = useDispatch();
    const param = useParams();

    const token = localStorage.getItem('token');
    const { isLoading } = request;
    const requestList = request.list;

    console.log(requestList[0]);

    let city;
    let district;

    useEffect(() => {
        dispatch(getListRequest(token));
    }, []);

    const repairerRequestList = []

    const verifiedRepairerList = requestList.map((x)=>{
        if(x.Repairer.id == param.id) repairerRequestList.push(x);
    })

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
            td: (data) => { return data.Customer.name }
        },
        {
            header: 'Repairer name',
            key: 'repName',
            td: (data) => { return data.Repairer.name }
        },
        {
            header: 'Address',
            key: 'address',
            td: (data) => {
                let address = '';
                if (cityOfVN) {
                    city = cityOfVN.find((x) => x.Id == data.city);
                    district = city.Districts.find((x) => x.Id == data.district);
                    address =  district.Name + ", " + city.Name;
                }
                return address
            }
        },
        {
            header: 'Schedule time',
            key: 'scheduletime',
            td: (data) => data.schedule_time ? data.schedule_time : null
        },
        {
            header: 'Status',
            key: 'status',
            td: (data) => data.request_statuses[0] ? data.request_statuses[0].status.name : null
        },
    ]

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            <ReactFlexyTable
                                className="request-table"
                                data={repairerRequestList}
                                columns={columns}
                                sortable
                                pageSize={20}
                                pageSizeOptions={[10, 20]}
                                globalSearch
                            />
                        </div>
                    )
            }
        </div>
    )
};

export default RepairerRequest;