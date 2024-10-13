import { BOOK } from "./actionType";

// action.js
export const ticketBooking = (formData) => {
    return {
      type: BOOK,
      payload: formData // This will be the form data you submit
    };
  };
  