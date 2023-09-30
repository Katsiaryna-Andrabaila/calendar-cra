import { CalendarInterface } from "../../../models/CalendarInterface";
import { UserInterface } from "../../../models/User";

export enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface EventState {
  guests: UserInterface[];
  events: CalendarInterface[];
}

export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS;
  payload: UserInterface[];
}

export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS;
  payload: CalendarInterface[];
}

export type EventAction = SetGuestsAction | SetEventsAction;
