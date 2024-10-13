
import { BOOK } from "./actionType";

const initialState = {
    value: [] 
  };

const ticketBookingReducers=(state=initialState,action)=>{

    switch(action.type){
        case BOOK:
            return{
                ...state,
                value: [...state.value, action.payload]
            }
            default:
                return state;
    }
     
}

export default ticketBookingReducers