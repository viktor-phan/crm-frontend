import "./App.css";
import { Entry } from "./pages/entry/Entry.page";
// import { DefaultLayout } from "./layouts/DefaultLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketList } from "./pages/ticket-listing/TicketList.page";
import { TicketLanding } from "./pages/ticket-landing/TicketLanding.page";
// import { GenerateFakeData } from "./pages/generateFakeData.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Entry />
          </Route>
          
            <PrivateRoute path="/dashboard">
              {" "}
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              {" "}
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              {" "}
              <TicketList />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tId">
              {" "}
              <TicketLanding />
            </PrivateRoute>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
