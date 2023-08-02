import React, { useState } from 'react';
import { Avatar, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { useGetUsersQuery } from '../api/repository';
import { Key, SortOrder } from 'antd/es/table/interface';
import { toast } from 'react-toastify';
import './user-list.scss';
import { useNavigate } from 'react-router-dom';
import { Direction } from '../../../common/models';

interface DataType {
  id: number;
  username: string;
  name: string;
  sex: string;
  age: number;
  city: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  field?: Key | readonly Key[];
  order?: SortOrder;
  filters?: Record<string, FilterValue | null>;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Avatar',
    dataIndex: 'photos',
    sorter: false,
    render: (photos) => <Avatar src={'data:image/jpeg;base64,' + photos[0]?.photoLob} size={32} />,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    sorter: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
  },
  {
    title: 'Gender',
    dataIndex: 'sex',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    sorter: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: true,
  },
  {
    title: 'City',
    dataIndex: 'city',
    sorter: true,
  },
];

const UserList: React.FC = () => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
  });
  const navigate = useNavigate();
  const page = tableParams.pagination?.current!;
  const size = tableParams.pagination?.pageSize!;
  const field = tableParams.field as string;
  const direction = tableParams.order === 'ascend' ? Direction.ASC : Direction.DESC;
  const { data, error, isLoading } = useGetUsersQuery({ page, size, field, direction });

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<DataType> | SorterResult<DataType>[],
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (error) {
      toast.error('Error during loading users');
    }
  };

  return (
    <Table
      className="user-list"
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={data?.content || []}
      pagination={{
        current: data!?.number + 1 || 1,
        pageSize: data!?.size || 10,
        total: data!?.totalElements || 0,
      }}
      loading={isLoading}
      onRow={(record) => {
        return {
          onClick: () => {
            navigate(`/users/${record.id}`);
          },
        };
      }}
      onChange={handleTableChange}
    />
  );
};

export default UserList;
