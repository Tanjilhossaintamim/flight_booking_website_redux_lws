import { ADD_FLIGHT_BOOK, DELETE_BOOKING_FLIGHT } from "./actionTypes";

export const bookingFlight = (values) => {
  return {
    type: ADD_FLIGHT_BOOK,
    payload: values,
  };
};

export const deleteB0okingFlight = (id) => {
  return {
    type: DELETE_BOOKING_FLIGHT,
    payload: id,
  };
};
