import { combineReducers } from "redux";
import ticketBookingReducers from "./bookingDetails/bookingReducer";

const rootReducer=combineReducers({
    ticketBookingR:ticketBookingReducers
});

export default rootReducer