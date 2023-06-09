import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Header from "./components/organisms/header/Header";
import Home from "./pages/home";
function App() {
  return (
    <div className="app">
  
 
      <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
