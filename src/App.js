import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { GlobalProvider } from "./context/globalState";
import AddTrans from "./components/AddTrans";
import History from "./components/History";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addtrans" element={<AddTrans />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;