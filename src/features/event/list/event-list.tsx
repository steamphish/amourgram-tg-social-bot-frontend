import React, { useState } from 'react';
import { Card, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { useGetEventsQuery } from '../api/repository';
import { Key, SortOrder } from 'antd/es/table/interface';
import { toast } from 'react-toastify';
import './event-list.scss';
import { Link } from 'react-router-dom';
import { Event } from '../api/models/event.model';
import { Direction } from '../../../common/models';
import moment from 'moment';
import { TABLE_COLUMN_DATE_FORMAT } from '../../../common/constants';
import CardHeader from '../../../common/components/ui/card-header/card-header';
import { EVENT_TYPE_ICONS } from '../../../common/constants/event-type-icons';
import { EventType } from '../../../common/enums/event-type.enum';

interface TableParams {
  pagination?: TablePaginationConfig;
  field?: Key | readonly Key[];
  order?: SortOrder;
  filters?: Record<string, FilterValue | null>;
}

const columns: ColumnsType<Event> = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: true,
    render: (id) => (
      <Link to={`/events/${id}`} onClick={(e) => e.stopPropagation()}>
        {id}
      </Link>
    ),
  },
  {
    title: 'Type',
    dataIndex: 'eventType',
    sorter: true,
    render: ({ name }: { name: EventType }) => EVENT_TYPE_ICONS[name],
  },
  {
    title: 'From user',
    dataIndex: 'sourceEventId',
    sorter: false,
    render: (sourceEventId) => (
      <Link to={`/users/${sourceEventId}`} onClick={(e) => e.stopPropagation()}>
        {sourceEventId}
      </Link>
    ),
  },
  {
    title: 'To user',
    dataIndex: 'destinationEventId',
    sorter: false,
    render: (destinationEventId) => (
      <Link to={`/users/${destinationEventId}`} onClick={(e) => e.stopPropagation()}>
        {destinationEventId}
      </Link>
    ),
  },
  {
    title: 'Created',
    dataIndex: 'createdDate',
    sorter: true,
    render: (date) => moment(date).format(TABLE_COLUMN_DATE_FORMAT),
  },
  {
    title: 'Delivered',
    dataIndex: 'deliveredDate',
    sorter: true,
    render: (date) => moment(date).format(TABLE_COLUMN_DATE_FORMAT),
  },

  {
    title: 'Shown',
    dataIndex: 'shown',
    sorter: false,
    render: (shown) => (shown ? 'Yes' : 'No'),
  },
];

const EventList: React.FC = () => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
  });
  const page = tableParams.pagination?.current!;
  const size = tableParams.pagination?.pageSize!;
  const field = tableParams.field as string;
  const direction = tableParams.order === 'ascend' ? Direction.ASC : Direction.DESC;
  const { data, error, isLoading } = useGetEventsQuery({ page, size, field, direction });

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<Event> | SorterResult<Event>[],
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (error) {
      toast.error('Error during loading events');
    }
  };

  return (
    <Card title={<CardHeader title="Events" isBackBtnVisible={false} />}>
      <Table
        className="event-list"
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data?.content || []}
        pagination={{
          current: data!?.number + 1 || 1,
          pageSize: data!?.size || 10,
          total: data!?.totalElements || 0,
        }}
        loading={isLoading}
        onChange={handleTableChange}
      />
    </Card>
  );
};

export default EventList;
