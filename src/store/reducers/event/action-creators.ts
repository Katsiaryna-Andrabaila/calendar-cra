import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { CalendarInterface } from "../../../models/CalendarInterface";
import { UserInterface } from "../../../models/User";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EventActionCreators = {
  setGuests: (payload: UserInterface[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: CalendarInterface[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const responce = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(responce.data));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: CalendarInterface) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const parsedEvents = JSON.parse(events) as CalendarInterface[];
      parsedEvents.push(event);
      dispatch(EventActionCreators.setEvents(parsedEvents));
      localStorage.setItem("events", JSON.stringify(parsedEvents));
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const parsedEvents = JSON.parse(events) as CalendarInterface[];
      const currentUserEvents = parsedEvents.filter(
        (el) => el.author === username || el.guest === username
      );
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);
    }
  },
};
