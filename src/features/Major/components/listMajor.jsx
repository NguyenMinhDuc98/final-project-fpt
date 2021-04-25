import { Button, Table } from "reactstrap";
import './listMajor.scss';
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeMajor, deActivateMajor } from "../majorSlice";
import '../../../assets/styles/style.scss';
import Toggle from 'react-toggle'

function ListMajor(props) {
    const majorList = props.list;
    const dispatch = useDispatch();
    const match = useRouteMatch();

    const token = localStorage.getItem('token');

    const handleActive = (id, token) => {
        dispatch(activeMajor({
            token: token,
            id: id
        }));
    };

    const handleDeActive = (id, token) => {
        dispatch(deActivateMajor({
            token: token,
            id: id
        }));
    };

    const majors = majorList.map((major, index) =>
        <tr key={major.id}>
            <th>
                <NavLink to={`${match.url}/services/${index}`}>
                    {major.name}
                </NavLink>
            </th>
            <th><img src={major.image} alt="logo" /></th>
            <th className="action-col">
                <Toggle
                    defaultChecked={major.is_active.data === 0 ? false : true}
                    onChange={() => {
                        major.is_active.data === 0 ? handleActive(major.id, token) : handleDeActive(major.id, token)
                    }}
                />
            </th>
            <th>
                <Button >
                    <NavLink to={`${match.url}/edit/${index}`}>
                        Edit
                    </NavLink>
                </Button>
            </th>
        </tr>
    )

    return (
        <div className='majorsList'>
            <h2>Major list</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Major</th>
                        <th>Image</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {majors}
                </tbody>
            </Table>
        </div>
    )
}

export default ListMajor;