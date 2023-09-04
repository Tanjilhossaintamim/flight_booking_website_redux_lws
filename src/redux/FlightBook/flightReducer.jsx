import { ADD_FLIGHT_BOOK, DELETE_BOOKING_FLIGHT } from "./actionTypes";

const initialState = {
  bookingList: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT_BOOK:
      return {
        ...state,
        bookingList:
          state.bookingList.length < 3
            ? state.bookingList.concat(action.payload)
            : state.bookingList,
      };
    case DELETE_BOOKING_FLIGHT:
      const newList = state.bookingList.filter(
        (item) => item.id != action.payload
      );
      return {
        ...state,
        bookingList: newList,
      };

    default:
      return state;
  }
};

export default flightReducer;
