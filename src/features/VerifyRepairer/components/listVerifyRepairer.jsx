import { useDispatch } from "react-redux";
import { Button, Table } from "reactstrap";
import { activeRepairer } from "../verifySlice";
import './listVerifyRepairer.scss';

function ListVerifyRepairer() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const nvRepairersList = JSON.parse(localStorage.getItem('verifyList'));

    console.log({ nvRepairersList });

    const handleApprove = (id, token) => {
        dispatch(activeRepairer({
            id: id,
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
            <h2>Not verified repairers</h2>
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