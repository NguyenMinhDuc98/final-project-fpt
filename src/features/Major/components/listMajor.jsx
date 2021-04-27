import { Button, Spinner } from "reactstrap";
import './listMajor.scss';
import { useHistory, useRouteMatch } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeMajor, deActivateMajor } from "../majorSlice";
import '../../../assets/styles/style.scss';
import Toggle from 'react-toggle'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListMajor } from "../majorSlice";
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import { NavLink } from "react-router-dom";

function ListMajor(props) {
    const major = useSelector(state => state.major);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const history = useHistory();

    const toAddMajor = () => {
        history.push('/majors/add-major')
    }

    const majorList = major.list;
    const { isLoading } = major;
    const token = localStorage.getItem('token');

    console.log({ majorList })

    useEffect(() => {
        dispatch(getListMajor(token));
    }, []);

    const columns = [
        {
            header: 'Id',
            key: 'id',
        },
        {
            header: 'Username',
            key: 'name',
            td: (data) =>
                <div>
                    <NavLink to={`${match.url}/services/${data.id}`}>
                        {data.name}
                    </NavLink>
                </div>
        },
        {
            header: 'Image',
            // can also use with nested objects
            key: 'image',
            td: (data) =>
                <div>
                    <img
                        src={data.image}
                        width='100'
                        height='100'
                    />
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
        }
    ]

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

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            <h3>Majors</h3>
                            <Button onClick={toAddMajor} className="add-major-button">
                                <FontAwesomeIcon icon="plus-circle" className="major-add" />
                            </Button>
                            <ReactFlexyTable
                                className="major-table"
                                data={majorList}
                                columns={columns}
                                sortable
                                filterable
                                nonFilterCols={["active"]}
                                pageSize={10}
                                pageSizeOptions={[10, 20]}
                                globalSearch
                                caseSensitive
                            />
                        </div>
                    )
            }
        </div>
    )
}

export default ListMajor;