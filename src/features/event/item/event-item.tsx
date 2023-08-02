import React from 'react';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import { useGetEventQuery } from '../api/repository';
import './event-item.scss';
import InfoField from '../../../common/components/ui/info-field/info-field';
import CardHeader from '../../../common/components/ui/card-header/card-header';

const EventProfile: React.FC = () => {
  const { eventId } = useParams();
  const { data: event, isLoading, isError } = useGetEventQuery(+eventId!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while loading event?.</div>;
  }

  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <Card title={<CardHeader title="Event info" backBtnLink="/events" isBackBtnVisible={true} />}>
      <div className="event-info">
        <div className="event-info__row">
          <InfoField title="Chat ID" text={event?.chatId} />
          <InfoField title="Event type" text={event?.eventType?.name} />
          <InfoField title="Created date" date={event?.createdDate} />
          <InfoField title="Delivered date" date={event?.deliveredDate} />
        </div>
        <div className="event-info__row">
          <InfoField title="From user" text={event?.sourceEventId} />
          <InfoField title="To user" text={event?.destinationEventId} />
          <InfoField title="Shown" text={event?.shown ? 'Yes' : 'No'} />
        </div>
      </div>
    </Card>
  );
};

export default EventProfile;
