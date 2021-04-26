import { Button, Spinner, Table } from "reactstrap";
import './listIssue.scss';
import { useParams, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeIssue, deActivateIssue } from '../issueSlice';
import Toggle from 'react-toggle';
import '../../../assets/styles/style.scss';
import { useEffect } from "react";
import { getListMajor } from "../../Major/majorSlice";

function ListIssue(props) {
    const majors = useSelector(state => state.major);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const param = useParams();

    const token = localStorage.getItem('token');
    const { isLoading } = majors;

    useEffect(() => {
        dispatch(getListMajor(token));
    }, []);

    let serviceName = ''
    let issueList = [];
    let issues = [];

    if (majors.list[param.majorIndex]) {
        console.log('log: ', majors.list[param.majorIndex].services);

        serviceName = majors.list[param.majorIndex].services[param.serviceIndex].name;
        issueList = majors.list[param.majorIndex].services[param.serviceIndex].issues;

        issues = issueList.map((issue, index) =>
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
                        defaultChecked={issue.is_active.data === 0 ? false : true}
                        onChange={() => {
                            issue.is_active.data === 0
                                ? handleActive(issue.id, token, majors.list[param.majorIndex].services[param.serviceIndex].id)
                                : handleDeActive(issue.id, token, majors.list[param.majorIndex].services[param.serviceIndex].id)
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
    }

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

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            {
                                majors.list[param.majorIndex]
                                    ? (
                                        <div className='issuesList'>
                                            <h3>{serviceName}</h3>
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
                                    : (<div className='spinner'><Spinner size='xxl' /></div>)
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default ListIssue;