import { Button, Table } from "reactstrap";
import './listIssue.scss';
import { useParams, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeIssue, deActivateIssue } from '../issueSlice';
import Toggle from 'react-toggle';
import '../../../assets/styles/style.scss';

function ListIssue(props) {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const param = useParams();

    const token = localStorage.getItem('token');
    const majors = props.list;
    const service = majors[param.serviceId].services[param.issueId];
    const issueList = majors[param.serviceId].services[param.issueId].issues;

    const handleActive = (id, token, service_id) => {
        dispatch(activeIssue({
            token: token,
            id: id,
            service_id: service_id
        }));
    };

    const handleDeActive = (id, token, service_id) => {
        dispatch(deActivateIssue({
            token: token,
            id: id,
            service_id: service_id
        }));
    };

    const issues = issueList.map((issue, index) =>
        <tr key={issue.id}>
            <th>
                {issue.name}
            </th>
            <th>
                {issue.estimate_fix_duration}
            </th>
            <th>
                {issue.estimate_price}
            </th>
            <th className="action-col">
                <Toggle
                    defaultChecked={issue.is_active.data == 0 ? false : true}
                    onChange={() => {
                        issue.is_active.data == 0 ? handleActive(issue.id, token, service.id) : handleDeActive(issue.id, token, service.id)
                    }}
                />
            </th>
            <th>
                <Button>
                    <NavLink to={`${match.url}/edit/${index}`}>
                        Edit
                    </NavLink>
                </Button>
            </th>
        </tr>
    )

    return (
        <div className='servicesList'>
            <h3>{}</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Issue</th>
                        <th>Estimate fix duration</th>
                        <th>Estimate price</th>
                        <th>Active</th>
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