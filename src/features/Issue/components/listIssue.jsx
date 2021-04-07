import { DropdownItem, DropdownMenu, DropdownToggle, Table, UncontrolledDropdown } from "reactstrap";
import './listIssue.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { Confirm } from 'react-st-modal';
import { useDispatch } from "react-redux";
import { deleteIssue } from "../issueSlice";

function ListIssue(props) {

    const dispatch = useDispatch();
    const match = useRouteMatch();

    const index = match.params.issueId;
    const majorList = props.list;
    const serviceList = majorList[match.params.serviceId].services;
    const issueList = serviceList[index].issues;
    
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
        dispatch(deleteIssue({
            token: props.token,
            id: id
        }));
    };

    const issues = issueList.map((issue, index) =>
        <tr key={issue.id}>
            <th>
                {issue.name}
            </th>
            {/* <th><img src={service.image} alt="logo" /></th> */}
            <th className="action-col">
                <UncontrolledDropdown>
                    <DropdownToggle variant="secondary" size="sm" id="dropdown-custom-components">
                        <FontAwesomeIcon icon="ellipsis-h" />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <NavLink to={`${match.url}/edit/${index}`}>
                                Edit
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem onClick={() => onClick(issue.id)}>
                            DELETE
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </th>
        </tr>
    )

    return (
        <div className='servicesList'>
            <h3>{serviceList[index].name}</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Issue</th>
                        {/* <th>Image</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {issues}
                </tbody>
            </Table>
        </div>
    )
}

export default ListIssue;