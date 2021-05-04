import { Button, Spinner, Table } from "reactstrap";
import './listIssue.scss';
import { useHistory, useParams, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeIssue, deActivateIssue } from '../issueSlice';
import Toggle from 'react-toggle';
import '../../../assets/styles/style.scss';
import { useEffect } from "react";
import { getListMajor } from "../../Major/majorSlice";
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListIssue(props) {
    const majors = useSelector(state => state.major);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const param = useParams();
    const history = useHistory();

    const token = localStorage.getItem('token');
    const { isLoading } = majors;

    useEffect(() => {
        dispatch(getListMajor(token));
    }, []);

    let major = null;
    let service = [];
    let issueList = [];

    if (majors.list.length > 0) {
        major = majors.list.find(({ id }) => id == param.majorId);
        service = major.services.find(({ id }) => id == param.serviceId);
        issueList = service.issues;
    }

    const columns = [
        {
            header: "Id",
            key: "id"
        },
        {
            header: "Name",
            key: "name"
        },
        {
            header: "Estimate fix duration(minutes)",
            key: "estimate_fix_duration"
        },
        {
            header: "Estimate price(VND)",
            key: "estimate_price",
            td: (data) => { return data.estimate_price.slice(0, data.estimate_price.length - 3) }
        },
        {
            header: 'Active',
            key: 'active',
            td: (data) =>
                <div>
                    <Toggle
                        defaultChecked={data.is_active.data == 0 ? false : true}
                        onChange={() => {
                            data.is_active.data == 0 ? handleActive(data.id, token) : handleDeActive(data.id, token)
                        }}
                    />
                </div>
        },
        {
            header: 'Action',
            key: 'action',
            td: (data) =>
                <div>
                    <Button onClick={() => toEditService(data)}>
                        Edit
                    </Button>
                </div>
        }
    ]

    const handleActive = (id, token, issue_id) => {
        dispatch(activeIssue({
            token: token,
            id: id,
            issue_id: issue_id
        }));
    };

    const handleDeActive = (id, token, issue_id) => {
        dispatch(deActivateIssue({
            token: token,
            id: id,
            issue_id: issue_id
        }));
    };

    const toAddIssue = () => {
        history.push(`${match.url}/add-issue`)
    };

    const toEditService = (data) => {
        history.push(`${match.url}/edit/${data.id}`)
    }

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            <h3>Issues</h3>
                            <Button onClick={toAddIssue} className="add-issue-button">
                                <FontAwesomeIcon icon="plus-circle" className="issue-add" />
                            </Button>
                            <ReactFlexyTable
                                className="issue-table"
                                data={issueList}
                                columns={columns}
                                sortable
                                pageSize={20}
                                pageSizeOptions={[20]}
                                globalSearch
                            />
                        </div>
                    )
            }
        </div>
    )
}

export default ListIssue;