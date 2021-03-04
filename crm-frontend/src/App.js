import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Entry } from "./page/entry/Entry.page";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Dashboard } from "./page/dashboard/Dashboard.page";

function App() {
  return (
    <div className="App">
      {/*<Entry />*/}
      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
