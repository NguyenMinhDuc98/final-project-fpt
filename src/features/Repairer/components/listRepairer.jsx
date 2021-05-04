import { Spinner } from "reactstrap";
import './listRepairer.scss';
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getListRepairer, activeRepairer, deActivateRepairer } from "../repairerSlice";
import { useEffect } from "react";
import '../../../assets/styles/style.scss';
import Toggle from 'react-toggle';
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import { NavLink } from "react-router-dom";

function ListRepairer() {
    const repairer = useSelector(state => state.repairer);
    const dispatch = useDispatch();
    const match = useRouteMatch();

    const repairerList = repairer.list;

    const token = localStorage.getItem('token');
    const { isLoading } = repairer;

    useEffect(() => {
        dispatch(getListRepairer(token));
    }, []);

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
                    <NavLink to={`/repairers/profile/${data.id}`}>
                        {data.name}
                    </NavLink>
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
                        defaultChecked={data.is_active}
                        onChange={() => {
                            !data.is_active ? handleActive(data.id, token) : handleDeactivate(data.id, token)
                        }}
                    />
                </div>
        }
    ]

    const handleActive = (id) => {
        dispatch(activeRepairer({
            token: token,
            user_id: id
        }));
    };

    const handleDeactivate = (id) => {
        dispatch(deActivateRepairer({
            token: token,
            user_id: id
        }));
    };

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            <h3>Repairer</h3>
                            <ReactFlexyTable
                                className="repairer-table"
                                data={repairerList}
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

export default ListRepairer;