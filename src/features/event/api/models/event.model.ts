import { BaseModel } from '../../../../common/models';

export interface Event {
  id: number;
  chatId: number;
  eventType: BaseModel;
  createdDate: string;
  deliveredDate: string;
  sourceEventId: number;
  destinationEventId: number;
  shown: boolean;
}
