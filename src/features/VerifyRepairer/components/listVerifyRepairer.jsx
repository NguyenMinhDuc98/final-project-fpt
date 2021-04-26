import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner } from "reactstrap";
import { getNotVerifiedList, verifyRepairer } from "../verifySlice";
import './listVerifyRepairer.scss';
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import { useEffect } from "react";

function ListVerifyRepairer() {
    const verifyList = useSelector(state => state.notVerifiedList);
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const nvRepairersList = verifyList.list;
    const {isLoading} = verifyList;

    console.log({ verifyList });

    useEffect(()=>{
        dispatch(getNotVerifiedList(token))
    },[]);

    const handleApprove = (id, token) => {
        dispatch(verifyRepairer({
            id: id,
            token: token
        }));
    };

    const columns = [
        {
            header: 'Id',
            key: 'id',
            //   td: (data) => <div>the id is {data.id}</div>
        },
        {
            header: 'Username',
            key: 'user.name',
            // td: (data) =>
            //     <div>
            //         {data.name}
            //     </div>
        },
        {
            header: 'Phone number',
            // can also use with nested objects
            key: 'user.phone_number'
        },
        {
            header: 'Email',
            key: 'user.email',
        },
        {
            header: 'Action',
            key: 'action',
            td: (data) =>
                <div>
                    <Button type='button' onClick={() => handleApprove(data.id, token)}>Approve </Button>
                    <Button>Reject</Button>
                </div>
        }
    ];

    return (
        <div>
            {
                isLoading
                    ? <div className='spinner'><Spinner size='xxl' /></div>
                    : (
                        <div>
                            <h3>Not verified repairers</h3>
                            <ReactFlexyTable
                                className="verify-table"
                                data={nvRepairersList}
                                columns={columns}
                                sortable
                                filterable
                                nonFilterCols={["action"]}
                                pageSize={10}
                                pageSizeOptions={[10, 20]}
                                globalSearch
                                caseSensitive
                            />
                        </div>
                    )
            }
        </div>
    );
}

export default ListVerifyRepairer;