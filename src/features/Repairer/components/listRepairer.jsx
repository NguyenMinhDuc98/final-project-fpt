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
            header: 'Fullname',
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
                        defaultChecked={data.is_active.data == 0 ? false : true}
                    />
                </div>
        }
    ]

    // const handleActive = (id, token) => {
    //     dispatch(activeRepairer({
    //         token: token,
    //         id: id
    //     }));
    // };

    // const handleInActive = (id, token) => {
    //     dispatch(deActivateRepairer({
    //         token: token,
    //         id: id
    //     }));
    // };

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

export default ListRepairer;