import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  searchTicketList: [],
};
const ticketListSlice = createSlice({
  //Name for the Slice
  name: "ticketList",
  //Initial State - look at the top
  initialState,
  //Reducers: Set of different states
  reducers: {
    //loading
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    //working
    fetchTicketSuccess: (state, {payload}) => {
      state.tickets = payload;
      state.searchTicketList = payload;
      state.isLoading = false;
    },
    //failing
    fetchTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchTickets: (state, { payload }) => {
      state.searchTicketList = state.tickets.filter((row) => {
        if (!payload) return row;
        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
});

const { reducer, actions } = ticketListSlice;
export const {
  fetchTicketSuccess,
  fetchTicketFail,
  fetchTicketLoading,
  searchTickets,
} = actions;
export default reducer;
