import { EventType } from '../enums/event-type.enum';
import React, { ReactElement } from 'react';
export const EVENT_TYPE_ICONS: Record<EventType, ReactElement> = {
  [EventType.LikeEventType]: <span>&#10084;&#65039;</span>,
  [EventType.MatchEventType]: <span>&#127919;</span>,
};
