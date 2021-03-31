import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { getNotVerifiedList } from "../verifySlice";
import './listVerifyRepairer.scss';

function ListVerifyRepairer() {
    const user = useSelector(state => state.login);
    const nvRepairer = useSelector(state => state.notVerifiedList);
    const dispatch = useDispatch();
    const token = user.token;
    const nvRepairersList = nvRepairer.list

    console.log('list repairer: ', nvRepairersList);

    useEffect(() => {
        dispatch(getNotVerifiedList(token))
    }, []);

    const nvRepairers = nvRepairersList.map((nvRepairer) =>
        <tr key={nvRepairer.id}>
            <th>{nvRepairer.user.name}</th>
            <th>{nvRepairer.district}, {nvRepairer.city}</th>
            {/* <th><img src={nvRepairer.image} alt="logo" /></th> */}
            <th className="action-col">
                <Button>Approve</Button>
                <Button>Reject</Button>
            </th>
        </tr>
    )

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
    )
}

export default ListVerifyRepairer;