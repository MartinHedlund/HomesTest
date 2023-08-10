import React from 'react';
import { Table } from 'antd'
import { ColorFormat } from 'antd/es/color-picker/interface';

function TableHouse() {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            children: [
                {
                    key: 11,
                    name: 'John Brown',
                    age: 42,
                    address: 'New York No. 2 Lake Park',
                }
            ]
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            children: [
                {
                    key: 11,
                    name: 'John Brown',
                    age: 42,
                    address: 'New York No. 2 Lake Park',
                }
            ]
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',

        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <div>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                      <p
                        style={{
                          marginLeft: "5em",
                        }}
                      >
                        {record}
                      </p>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                  }}
                dataSource={dataSource}
                />
        </div>
    );
}

export default TableHouse;