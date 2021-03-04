import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Entry } from "./pages/entry/Entry.page";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketList } from "./pages/ticket-listing/TicketList.page";
import { TicketLanding } from "./pages/ticket-landing/TicketLanding.page";
import { GenerateFakeData } from "./pages/generateFakeData.page";
function App() {
  return (
    <div className="App">
      {/* <Entry />*/}
      <DefaultLayout>
        {/* <Dashboard/>*/}
        {/*<AddTicket /> */}
        <TicketList />
        {/*<TicketLanding />*/}
       
      </DefaultLayout>
    </div>
  );
}

export default App;
