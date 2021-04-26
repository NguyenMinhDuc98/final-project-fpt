import { Table } from "reactstrap";
import './listRepairer.scss';
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListRepairer, activeRepairer, deActivateRepairer } from "../repairerSlice";
import { useEffect } from "react";
import '../../../assets/styles/style.scss';
import Toggle from 'react-toggle';

function ListRepairer() {
    const repairer = useSelector(state => state.repairer);
    const dispatch = useDispatch();
    const match = useRouteMatch();

    const token = localStorage.getItem('token');
    let checked = null;

    useEffect(() => {
        dispatch(getListRepairer(token));
    }, [token]);

    const repairerList = repairer.list;

    const handleActive = (id, token) => {
        dispatch(activeRepairer({
            token: token,
            id: id
        }));
    };

    const handleInActive = (id, token) => {
        dispatch(deActivateRepairer({
            token: token,
            id: id
        }));
    };

    const repairers = repairerList.map((repairer, index) =>
        <tr key={repairer.id}>
            <th>
                <NavLink to={`${match.url}/profile/${index}`}>
                    {repairer.name}
                    {console.log({repairer})}
                </NavLink>
            </th>
            <th>{repairer.phone_number}</th>
            <th>{repairer.email}</th>
            <th>
                {
                    repairer.is_active.data == 0 ? checked = false : checked = true
                }
                <Toggle
                    defaultChecked={checked}
                    onChange={() => {
                        checked ? handleInActive(repairer.id, token) : handleActive(repairer.id, token)
                    }}
                />
            </th>
        </tr>
    )

    return (
        <div className='repairersList'>
            <h2>Repairer List</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {repairers}
                </tbody>
            </Table>
        </div>
    )
}

export default ListRepairer;