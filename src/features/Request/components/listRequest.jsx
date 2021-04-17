
function ListRequest(){
    

    const majors = majorList.map((major, index) =>
        <tr key={major.id}>
            <th>
                <NavLink to={`${match.url}/services/${index}`}>
                    {major.name}
                </NavLink>
            </th>
        </tr>
    )

    return(
        <div className='requestList'>
            <Table>
                <thead>
                    <tr>
                        <th>Request</th>
                    </tr>
                </thead>
                <tbody>
                    {majors}
                </tbody>
            </Table>
        </div>
    )
};

export default ListRequest;