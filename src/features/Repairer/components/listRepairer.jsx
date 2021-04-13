import { DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import './listRepairer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { Confirm } from 'react-st-modal';
import { useDispatch, useSelector } from "react-redux";
import { deleteRepairer, getListRepairer } from "../repairerSlice";
import { useEffect } from "react";

function ListRepairer() {
    const repairer = useSelector(state => state.repairer);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const token = localStorage.getItem('token');

    console.log('repairer: ', repairer);
    console.log('repairer: ', repairer.list[0].is_active.data);

    useEffect(() => {
        dispatch(getListRepairer(token));
        console.log('token: ', token);
    }, []);

    const repairerList = repairer.list;

    const onClick = async (id) => {
        const isConfirm = await Confirm(
            'You cannot undo this action',
            'Are you sure you want to delete the entry?'
        );

        if (isConfirm) {
            handleDelete(id);
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteRepairer({
            token: token,
            id: id
        }));
    };

    const repairers = repairerList.map((repairer, index) =>
        <tr key={repairer.id}>
            <th>
                <NavLink to={`${match.url}/profile/${index}`}>
                    {repairer.name}
                </NavLink>
            </th>
            <th>{repairer.phone_number}</th>
            <th>{repairer.email}</th>
            {/* <th>
                {repairer}
            </th> */}
        </tr>
    )

    return (
        <div className='repairersList'>
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