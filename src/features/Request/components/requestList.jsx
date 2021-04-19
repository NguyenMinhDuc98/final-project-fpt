import './requestList.scss';
import '../../../assets/styles/style.scss';
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import { useCallback, useRef, useState } from 'react';
import { Input } from 'reactstrap';

function ListMajor() {
    const repairerList = JSON.parse(localStorage.getItem('repairerList'))

    console.log('log: ', repairerList);

    const gridStyle = { minHeight: 400 };

    const [gridRef, setGridRef] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [dataSource, setDataSource] = useState(repairerList);

    const searchTextRef = useRef(searchText);
    searchTextRef.current = searchText;

    const render = useCallback(({ value }) => {
        const lowerSearchText = searchTextRef.current.toLowerCase();
        if (!lowerSearchText) {
            return value;
        }

        const str = value + '' // get string value
        const v = str.toLowerCase() // our search is case insesitive
        const index = v.indexOf(lowerSearchText);

        if (index === -1) {
            return value;
        }

        return [
            <span key="before">{str.slice(0, index)}</span>,
            <span key="match" style={{ background: 'yellow', fontWeight: 'bold' }}>{str.slice(index, index + lowerSearchText.length)}</span>,
            <span key="after">{str.slice(index + lowerSearchText.length)}</span>
        ]
    }, [])

    const shouldComponentUpdate = () => true;

    const defaultColumns = [
        { id: 'id', header: 'ID', render: ({ data }) => data.id, defaultWidth: 80, shouldComponentUpdate },
        { name: 'name', header: 'Name', defaultFlex: 1, shouldComponentUpdate, render },
        { name: 'phone_number', header: 'Phone number', defaultFlex: 1, shouldComponentUpdate, render },
        { name: 'email', header: 'Email', defaultFlex: 1, shouldComponentUpdate, render },
        {
            name: 'is_active',
            header: 'Active',
            defaultFlex: 1,
            type: 'string',
            shouldComponentUpdate,
            render: ({ data }) => data.is_active.data == 1 ? 'Active' : 'Not active'
        },
    ];

    const [columns] = useState(defaultColumns);

    const onSearchChange = ({ target: { value } }) => {
        const visibleColumns = gridRef.current.visibleColumns;

        setSearchText(value);

        const newDataSource = repairerList.filter(p => {
            return visibleColumns.reduce((acc, col) => {
                const v = (p[col.id] + '').toLowerCase() // get string value
                return acc || v.indexOf(value.toLowerCase()) != -1 // make the search case insensitive
            }, false)
        });

        setDataSource(newDataSource);
    }

    return (
        <div className='request-list'>
            <div className='search'>
                <label>Search text: <Input value={searchText} onChange={onSearchChange} /></label>
            </div>
            <ReactDataGrid
                onReady={setGridRef}
                idProperty="id"
                style={gridStyle}
                dataSource={dataSource}
                columns={columns}
                pagination
                defaultLimit={15}
                defaultSkip={0}
                pageSizes={[10, 15, 30]}
            />
        </div>
    );
};

export default ListMajor;