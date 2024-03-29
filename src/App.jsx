import "./App.css";

import { Route, Routes } from "react-router-dom";

import Index from "./index";
import Login from "./Components/login";
import Navbar from "./Components/navBar";
import Register from "./Components/register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
