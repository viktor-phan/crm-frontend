//Find the states
import {
  fetchTicketSuccess,
  fetchTicketFail,
  fetchTicketLoading,
  searchTickets,
} from "./ticketSlice";
import { getAllTickets } from "../../api/ticketapi";
//All Tickets for a state this the action that take all reducers
const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  //fetch data from API
  try {
    // This is the payload of loading action
    const result = await getAllTickets();
    console.log("This is the result:" + result);
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};
const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

export { filterSearchTicket, fetchAllTickets };
