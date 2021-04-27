import { Button, Spinner, Table } from "reactstrap";
import './listService.scss';
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeService, deActivateService } from "../serviceSlice";
import '../../../assets/styles/style.scss';
import Toggle from 'react-toggle'
import { useEffect } from "react";
import { getListMajor } from "../../Major/majorSlice";

function ListService(props) {
    const majors = useSelector(state => state.major);
    const dispatch = useDispatch();
    const match = useRouteMatch();


    const token = localStorage.getItem('token');
    const { isLoading } = majors;

    const index = match.params.majorId;

    let majorName = ''
    let serviceList = [];
    let services = [];

    if (majors.list[index]) {
        majorName = majors.list[index].name;
        serviceList = majors.list[index].services;

        services = serviceList.map((service, index) =>
            <tr key={service.id}>
                <th>
                    <NavLink to={`${match.url}/issues/${index}`}>
                        {service.name}
                    </NavLink>
                </th>
                <th className="action-col">
                    <Toggle
                        defaultChecked={service.is_active.data == 0 ? false : true}
                        onChange={() => {
                            service.is_active.data == 0 ? handleActive(service.id, token, majors.list[index].id) : handleDeActive(service.id, token, majors.list[index].id)
                        }}
                    />
                </th>
                <th>
                    <Button>
                        <NavLink to={`${match.url}/edit/${index}`}>Edit</NavLink>
                    </Button>
                </th>
            </tr>
        )
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
                            {
                                majors.list[index]
                                    ? (
                                        <div className='servicesList'>
                                            <h3>{majorName}</h3>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>Service</th>
                                                        <th>Active</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {services}
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

export default ListService;