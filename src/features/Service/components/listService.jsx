import { Button, Spinner } from "reactstrap";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeService, deActivateService } from "../serviceSlice";
import Toggle from 'react-toggle'
import { useEffect } from "react";
import { getListMajor } from "../../Major/majorSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import '../../../assets/styles/style.scss';
import './listService.scss';

function ListService(props) {
    const majors = useSelector(state => state.major);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const param = useParams();
    const history = useHistory();

    console.log({match})

    const token = localStorage.getItem('token');
    const { isLoading } = majors;

    let major = null;
    let serviceList = [];

    if(majors.list.length > 0){
        major = majors.list.find(({id}) => id == param.majorId);
        serviceList = major.services
    }

    const columns = [
        {
            header: 'Id',
            key: 'id',
        },
        {
            header: 'Service name',
            key: 'name',
            td: (data) =>
                <div>
                    <NavLink to={`${match.url}/issues/${data.id}`}>
                        {data.name}
                    </NavLink>
                </div>
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

    const toAddService = () => {
        history.push(`${match.url}/add-service`)
    }
    const toEditService = (data) => {
        history.push(`${match.url}/edit/${data.id}`)
    }

    useEffect(() => {
        dispatch(getListMajor(token));
    }, [])

    const handleActive = (id, token, major_id) => {
        dispatch(activeService({
            token: token,
            id: id,
            major_id: major_id
        }));
    };

    const handleDeActive = (id, token, major_id) => {
        dispatch(deActivateService({
            token: token,
            id: id,
            major_id: major_id
        }));
    };

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            <h3>Services</h3>
                            <Button onClick={toAddService} className="add-service-button">
                                <FontAwesomeIcon icon="plus-circle" className="major-add" />
                            </Button>
                            <ReactFlexyTable
                                className="service-table"
                                data={serviceList}
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

export default ListService;