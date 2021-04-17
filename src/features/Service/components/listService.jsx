import { Button, Table } from "reactstrap";
import './listService.scss';
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeService, deActivateService } from "../serviceSlice";
import '../../../assets/styles/style.scss';
import Toggle from 'react-toggle'

function ListService(props) {

    const dispatch = useDispatch();
    const match = useRouteMatch();

    const index = match.params.id;
    const major = props.list[index];
    const serviceList = major.services;
    const token = localStorage.getItem('token');

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

    const services = serviceList.map((service, index) =>
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
                        service.is_active.data == 0 ? handleActive(service.id, token, major.id) : handleDeActive(service.id, token, major.id)
                    }}
                />
            </th>
            <th>
                <Button>
                    <NavLink to={`${match.url}/edit/${index}`}>Edit</NavLink>
                </Button>
            </th>
            {console.log({service})}
        </tr>
    )

    return (
        <div className='servicesList'>
            <h3>{props.list[index].name}</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Service</th>
                        {/* <th>Active</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services}
                </tbody>
            </Table>
        </div>
    )
}

export default ListService;