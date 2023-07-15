import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import InserirAlarm from "./components/InserirAlarm";
import AlarmList from "./components/AlarmList";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alarmlist" element={<AlarmList />} />
            <Route path="/create-alarm" element={<InserirAlarm />} />
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
