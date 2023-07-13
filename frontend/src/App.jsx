import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import InserirAlarm from "./components/InserirAlarm";
import AlarmList from "./components/AlarmList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<AlarmList />} />
         
          </Routes>
          <InserirAlarm />
        </div>
      </div>
    </Router>
  );
}

export default App;
