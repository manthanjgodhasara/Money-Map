import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;