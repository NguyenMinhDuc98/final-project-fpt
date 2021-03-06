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

    console.log({ match })

    const toAddMajor = () => {
        history.push('/majors/add-major')
    }
    const toEditMajor = (data) => {
        history.push(`majors/edit/${data.id}`)
    }

    const majorList = major.list.filter(major => major.id > 0);
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
            header: 'Major name',
            key: 'name',
            td: (data) =>
                <div>
                    <NavLink to={`majors/services/${data.id}`}>
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
        },
        {
            header: 'Action',
            key: 'action',
            td: (data) =>
                <div>
                    <Button onClick={() => toEditMajor(data)}>
                        Edit
                    </Button>
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

export default ListMajor;