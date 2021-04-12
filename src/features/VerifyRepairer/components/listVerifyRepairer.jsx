import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { activeRepairer, getNotVerifiedList } from "../verifySlice";
import './listVerifyRepairer.scss';

function ListVerifyRepairer() {
    const nvRepairer = useSelector(state => state.notVerifiedList);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const nvRepairersList = nvRepairer.list;

    // console.log('token: ', token);

    useEffect(() => {
        dispatch(getNotVerifiedList(token))
    },[]);

    const handleApprove = (id, token) => {
        dispatch(activeRepairer({
            repairer_id: id,
            token: token
        }));
    };

    const nvRepairers = nvRepairersList.map((nvRepairer) =>
        <tr key={nvRepairer.id}>
            <th>{nvRepairer.user.name}</th>
            <th>{nvRepairer.district}, {nvRepairer.city}</th>
            {/* <th><img src={nvRepairer.image} alt="logo" /></th> */}
            <th className="action-col">
                <Button type='button' onClick={() => handleApprove(nvRepairer.id, token)}>Approve </Button>
                <Button>Reject</Button>
            </th>
        </tr>
    );

    return (
        <div className='nvRepairersList'>
            <Table>
                <thead>
                    <tr>
                        <th>Repairer</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {nvRepairers}
                </tbody>
            </Table>
        </div>
    );
}

export default ListVerifyRepairer;