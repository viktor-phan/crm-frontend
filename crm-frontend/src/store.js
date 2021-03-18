import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-listing/ticketSlice";
import loginReducer from "./components/login/login.slice"
import userReducer from "./pages/dashboard/userSlice"
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    users: userReducer,
  },
});

export default store;
