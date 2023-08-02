import React from 'react';
import './info-field.scss';
import moment from 'moment';
import { TABLE_COLUMN_DATE_FORMAT } from '../../../constants';

interface InfoFieldProps {
  title: string;
  text?: string | number | undefined;
  date?: string | number | undefined;
}

const InfoField: React.FC<InfoFieldProps> = ({ title, text, date }) => {
  return (
    <div className="info-field">
      <h3 className="info-title">{title}</h3>
      <p className="info-text">{text || moment(date).format(TABLE_COLUMN_DATE_FORMAT) || 'N/A'}</p>
    </div>
  );
};

export default InfoField;
